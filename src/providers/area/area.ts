import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import * as Fuse from 'fuse.js';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';

import { BaseModel } from '../database/basemodel';
import { FishProvider, Fish } from '../fish/fish';
import { DatabaseProvider } from '../database/database';
import { ApiProvider } from '../api/api';
import { TableDef } from '../database/table';
import { DBMethod } from '../database/decorators';
import { SettingsProvider } from '../settings/settings';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { RegionProvider } from '../region/region';

export interface AreaImage {
  h: number;
  w: number;
  file: string;
  ratio: string;
}

export interface Area {
  ID: number;
  orgid: number;
  /** Title */
  t: string;
  kw: string[];
  note: string;
  c1: number;
  c2: number;
  c3: number;
  m1: number;
  m2: number;
  m3: number;
  lat: number;
  lng: number;
  zoom: string;
  pnt: number;
  car: number;
  eng: number;
  hcp: number;
  /**
   * Do we sell cards for this area?
   */
  wsc: boolean;
  mod: number;
  d: string;
  ptab: string;
  layers: string[];

  // Not in db
  photo: string;
  images?: Promise<AreaImage[]>;
  files?: Promise<AreaFile[]>;
  org: string;
  level?: number;
  distance?: number;
  favorite?: boolean;
}

export interface AreaFile {
  ID: number;
  /**
   * Area ID
   */
  area: number;
  /**
   *  File Headline
   */
  t: string;
  /**
   * File location relative to serverLocation
   */
  f: string;
  /**
   * 3 letter file type (e.g. PDF)
   */
  typ: string;
  /**
   * Thumbnail
   */
  thumb: string;

  /**
   * url to resource
   * Not stored in Database
   */
  url: string;

  /**
   * File name
   * Not stored in Database
   */
  filename: string;
}

@Injectable()
export class AreaProvider extends BaseModel<Area> {
  searchCache: Record<string, Promise<Area[]>> = {};
  areaGetAllCache: Record<string, Promise<Area[]>> = {};
  watch: Subscription;

  protected readonly tables: TableDef[] = [
    {
      name: 'Area',
      primary: 'ID',
      members: {
        ID: 'int',
        orgid: 'int',
        t: 'text',
        kw: 'text',
        note: 'text',
        c1: 'int',
        c2: 'int',
        c3: 'int',
        m1: 'int',
        m2: 'int',
        m3: 'int',
        lat: 'real',
        lng: 'real',
        zoom: 'text',
        pnt: 'int',
        car: 'int',
        eng: 'int',
        hcp: 'int',
        wsc: 'int',
        mod: 'int',
        d: 'text',
        ptab: 'text',
      },
    },
    {
      name: 'Area_Fish',
      primary: 'ID',
      members: {
        ID: 'text',
        aid: 'int',
        fid: 'int',
        amount: 'int',
        comment: 'text',
      },
    },
    {
      name: 'Area_Photos',
      primary: 'ID',
      members: {
        ID: 'int',
        area: 'int', // Area ID
        file: 'text', // File name
        t: 'text', // Title
        d: 'text', // Description
        h: 'int', // Height in pixels
        w: 'int', // Width in pixels
        org: 'int', // Organisation ID
        s: 'int', // Size in bytes
      },
    },
    {
      name: 'Area_Files',
      members: {
        ID: 'int',
        area: 'int', // Area ID
        t: 'text', // File headline
        f: 'text', // Filename
        typ: 'text', // 3 letter file type (e.g. PDF)
        thumb: 'text', // Thumbnail
      },
    },
    {
      name: 'Area_Layers',
      members: {
        area: 'int', // Area ID
        layer: 'text', // URL for layer kml or json
      },
    },
  ];

  readonly updateStrategy = 'timed';

  currentLocation: any;

  constructor(
    protected DB: DatabaseProvider,
    protected API: ApiProvider,
    private geo: Geolocation,
    private fishProvider: FishProvider,
    private settings: SettingsProvider,
    private analytics: FirebaseAnalytics,
    private region: RegionProvider,
  ) {
    super();
    this.initialize();
  }

  async update(skipWait?: boolean): Promise<boolean> {
    if (!skipWait) {
      await this.ready;
    }

    const data = Promise.all([this.API.get_areas(), this.API.get_images()]);

    await data.then(this.insert);
    this.searchCache = {};
    this.areaGetAllCache = {};
    return true;
  }

  insert = ([areas, images]: [any, any]) => {
    const fishArr = [];
    const filesArr = [];
    const layersArr = [];
    for (const key in areas) {
      const fishes = areas[key].fish;
      for (const fishKey in fishes) {
        fishArr.push({
          ID: key + '_' + fishKey,
          fid: fishKey,
          aid: key,
          amount: fishes[fishKey][0],
          comment: fishes[fishKey][1],
        });
      }

      areas[key].files.forEach((file) => {
        filesArr.push({ ...file, area: key });
      });

      areas[key].layers.forEach((layer) => {
        layersArr.push({ area: key, layer });
      });
    }
    return Promise.all([
      this.DB.populateTable(this.tables[0], areas),
      this.DB.populateTable(this.tables[1], fishArr),
      this.DB.populateTable(this.tables[2], images),
      this.DB.populateTable(this.tables[3], filesArr),
      this.DB.populateTable(this.tables[4], layersArr),
    ]);
  };

  transform(area: Area, single: boolean = false) {
    area.photo = area.photo
      ? this.region.serverLocation$.value + area.photo
      : area.photo;
    area.kw = area.kw ? ((area.kw as any) as string).split(',') : [];
    if (single) {
      area.images = this.getPhotos(area.ID);
      area.files = this.getFiles(area.ID);
    } else {
      for (let i = 1; i < 6; ++i) {
        area['fish_' + i] =
          area['fish_' + i] && area['fish_' + i].split(this.fishSeparator);
      }
    }
  }

  /**
   * Fetches a single Area
   * @param {Integer} id - ID for the requested area
   * @return {Promise<Area>} - A promise for the requested area
   */
  @DBMethod
  async getOne(id: number): Promise<Area> {
    const res = await this.DB.getSingle(
      `
      SELECT
        Area.*,
        Organization.t AS org,
        CASE WHEN User_Favorite.a IS NULL THEN 0 ELSE 1 END AS favorite
        FROM Area
      LEFT JOIN User_Favorite ON User_Favorite.a = Area.ID
      LEFT JOIN Organization ON Area.orgid = Organization.ID
      WHERE Area.ID = ?
    `,
      Array.isArray(id) ? id : [id],
    );
    this.transform(res, true);
    return res;
  }

  private readonly fishSeparator = '__-__SEPARATORr__-__';
  @DBMethod
  async getAll(countyId?: number): Promise<Area[]> {
    const selectFish = (id: number) => {
      return `Fish_${id}.fishes as fish_${id}`;
    };

    const joinFish = (id: number) => {
      return `
        LEFT JOIN (
          SELECT
            Area_Fish.amount AS amount,
            Area.ID AS aid,
            GROUP_CONCAT(Fish.t, "${this.fishSeparator}") AS fishes
          FROM Area_Fish
          JOIN Fish ON Area_Fish.fid = Fish.ID
          JOIN Area ON Area_Fish.aid = Area.ID
          WHERE Area_Fish.amount = ${id}
          GROUP BY Area_Fish.amount, Area.ID
        ) AS Fish_${id} ON Area.ID = Fish_${id}.aid
      `;
    };

    const res = await this.DB.getMultiple(
      `
      SELECT
        Area.*,
        Organization.t AS org,
        Organization.d AS org_d,
        CASE WHEN User_Favorite.a IS NULL THEN 0 ELSE 1 END AS favorite,
        ${selectFish(1)},
        ${selectFish(2)},
        ${selectFish(3)},
        ${selectFish(4)},
        ${selectFish(5)},
        Area_Photos.file AS photo
      FROM Area

      ${joinFish(1)}
      ${joinFish(2)}
      ${joinFish(3)}
      ${joinFish(4)}
      ${joinFish(5)}

      LEFT JOIN Area_Fish ON Area_Fish.aid = Area.ID
      LEFT JOIN Fish ON Area_Fish.fid = Fish.ID
      LEFT JOIN User_Favorite ON User_Favorite.a = Area.ID
      LEFT JOIN Organization ON Area.orgid = Organization.ID
      LEFT JOIN (
        SELECT MIN(file), area, file FROM Area_Photos
        GROUP BY area
        ORDER BY Area_Photos.file ASC
      ) AS Area_Photos ON Area.ID = Area_Photos.area
      ${countyId ? 'WHERE Area.c1 = ? OR Area.c2 = ? OR Area.c3 = ?' : ''}
      GROUP BY Area.ID
    `,
      countyId ? [countyId, countyId, countyId] : [],
    );
    res.forEach((a) => this.transform(a));
    return res;
  }

  @DBMethod
  async getPhotos(areaId): Promise<AreaImage[]> {
    return this.DB.getMultiple(
      `
      SELECT Area_Photos.* FROM Area_Photos
      WHERE Area_Photos.area = ?
      ORDER BY Area_Photos.file ASC
      `,
      [areaId],
    ).then((images) => {
      for (let i = 0; i < images.length; ++i) {
        images[i].ratio = (images[i].h / images[i].w) * 100 + '%';
        images[i].file = this.region.serverLocation$.value + images[i].file;
      }
      return images;
    });
  }

  @DBMethod
  async getFiles(areaId): Promise<AreaFile[]> {
    return this.DB.getMultiple(
      `SELECT Area_Files.* FROM Area_Files WHERE Area_Files.area = ?`,
      [areaId],
    ).then((files: AreaFile[]) => {
      files.forEach((file) => {
        file.thumb = this.region.serverLocation$.value + file.thumb;
        file.url = this.region.serverLocation$.value + file.f;
        file.filename = file.f.split('/').slice(-1)[0];
      });
      return files;
    });
  }

  @DBMethod
  async getFishes(aid): Promise<Fish[]> {
    return this.DB.getMultiple(
      `
      SELECT * FROM Area_Fish
      JOIN Fish ON Area_Fish.fid = Fish.ID
      WHERE Area_Fish.aid = ?
      ORDER BY Area_Fish.amount DESC
    `,
      [aid],
    );
  }

  @DBMethod
  async getLayers(aid: number): Promise<string[]> {
    const layers = await this.DB.getMultiple(
      `
      SELECT layer from Area_Layers
      WHERE Area_Layers.area = ?
      `,
      [aid],
    );
    return layers.map(({ layer }) => layer);
  }

  /**
   * Searches the database using a query
   *
   * The query is matched to a name and/or keyword
   * @method search
   * @param {String} searchstring - a string to search for  in the area or organization names
   * @param {Integer} countyId - ID for a county to filter on
   * @return {Promise<Area[]>} Promise for the matching areas
   */
  @DBMethod
  search(searchstring: string, countyId: number): Promise<Area[]> {
    this.analytics.logEvent('search', { search_term: searchstring });
    if (this.searchCache[searchstring + countyId]) {
      return this.searchCache[searchstring + countyId];
    }
    let t0;
    if (performance && performance.now) {
      t0 = performance.now();
    }
    this.startWatch();

    const result = this.getSearchResult(searchstring, countyId);

    result
      .catch(() => {})
      .then(() => {
        if (performance && performance.now) {
          const t1 = performance.now();
          console.log('Searching took:', t1 - t0, 'ms');
        }
      });
    this.searchCache[searchstring + countyId] = result;
    return result;
  }

  private async getSearchResult(searchstring: string, countyId: number) {
    if (!this.areaGetAllCache[countyId]) {
      this.areaGetAllCache[countyId] = this.getAll(countyId);
    }
    const areas = await this.areaGetAllCache[countyId];

    const fuse = this.getFuse(areas);

    const result = searchstring
      ? fuse.search(searchstring)
      : fuse._docs.map((i) => ({ item: i, score: 0 }));

    const foundFish = await this.fishProvider
      .search(searchstring)
      .then((fishes) => {
        return fishes.length ? fishes[0].item.t : undefined;
      });

    if (this.currentLocation || foundFish) {
      result.forEach((r) => {
        if (this.currentLocation) {
          const distance = this.calculateDistance(
            r.item.lat,
            r.item.lng,
            this.currentLocation.lat,
            this.currentLocation.lng,
          );
          r.item.distance = distance;
          r.score += this.mapDistance(distance);
        }
        if (foundFish) {
          for (let i = 1; i < 6; ++i) {
            const fishArr = r.item['fish_' + i];
            if (
              fishArr &&
              fishArr.some((fish) => fish.indexOf(foundFish) !== -1)
            ) {
              r.score -= i / 1500;
              break;
            }
          }
        }
      });
    }

    return result
      .sort((a, b) => {
        const res = a.score - b.score;
        if (res) return res;
        if (a.item.org > b.item.org) {
          return 1;
        } else if (a.item.org < b.item.org) {
          return -1;
        }
        return 0;
      })
      .map((r) => r.item);
  }

  private getFuse(areas: Area[]) {
    const fuseOptions = {
      keys: [
        {
          name: 't',
          weight: 20,
        },
        {
          name: 'd',
          weight: 8,
        },
        {
          name: 'note',
          weight: 4,
        },
        {
          name: 'kw',
          weight: 10,
        },
        {
          name: 'org',
          weight: 12,
        },
        {
          name: 'org_d',
          weight: 5,
        },
        {
          name: 'fish_1',
          weight: 3,
        },
        {
          name: 'fish_2',
          weight: 5,
        },
        {
          name: 'fish_3',
          weight: 8,
        },
        {
          name: 'fish_4',
          weight: 10,
        },
        {
          name: 'fish_5',
          weight: 15,
        },
      ],
      includeScore: true,
      shouldSort: false,
      threshold: 0.5,
      distance: 1000,
      maxPatternLength: 16,
    };
    if (this.settings.isDeveloper) {
      fuseOptions.keys.push(
        { name: 'ID', weight: 10 },
        { name: 'orgid', weight: 10 },
      );
    }
    // Populate Fuse search index
    return new Fuse(areas, fuseOptions);
  }

  private startWatch() {
    if (this.watch) {
      return;
    }
    this.watch = this.geo
      .watchPosition({
        timeout: 10000,
        enableHighAccuracy: false,
      })
      .pipe(filter((geo) => !!geo.coords))
      .subscribe((position) => {
        if (!this.currentLocation) {
          this.searchCache = {};
        }
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
  }

  private mapDistance(val) {
    return Math.log(1 + val) / Math.log(1 + 1000000) / 100;
  }

  private calculateDistance(lat1, lon1, lat2, lon2) {
    // Implementation shamelessely stolen from http://www.movable-type.co.uk/scripts/latlong.html
    const R = 6371e3; // metres
    const φ1 = lat1 * (Math.PI / 180);
    const φ2 = lat2 * (Math.PI / 180);
    const Δφ = (lat2 - lat1) * (Math.PI / 180);
    const Δλ = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }
}
