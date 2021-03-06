import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Slides,
  ModalController,
  Tabs,
  Content,
} from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TranslateService } from '@ngx-translate/core';

import { Area, AreaImage } from '../../providers/area/area';
import { Organization } from '../../providers/organization/organization';
import { Product } from '../../providers/product/product';
import { UserProvider } from '../../providers/user/user';
import { SessionProvider } from '../../providers/session/session';
import { TranslateToastController } from '../../providers/translate-toast-controller/translate-toast-controller';
import { LoginPage } from '../login/login';
import { Fish } from '../../providers/fish/fish';
import { ImgcacheService } from '../../imgcache/imgcache.service';
import { IFISKE_ERRORS } from '../../providers/api/api';
import {
  DeepLinks,
  DeepLinksProvider,
} from '../../providers/deep-links/deep-links';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { AreaDetailParams } from '../areas-detail/areas-detail-params';

@IonicPage()
@Component({
  selector: 'page-areas-detail-info',
  templateUrl: 'areas-detail-info.html',
})
export class AreasDetailInfoPage {
  products: Product[];
  area: Area;
  org: Organization;
  images: any[];
  files: any[];
  species?: Fish[];

  private slides: Slides;

  private tabsCtrl: Tabs;
  private navCtrl: NavController;

  @ViewChild('slides')
  set slidesSetter(slides: Slides) {
    if (!this.slides && slides) {
      this.slides = slides;
      this.initSlides();
    }
  }

  @ViewChild(Content)
  contentRef: Content;

  constructor(
    private _navCtrl: NavController,
    public navParams: NavParams,
    private sessionData: SessionProvider,
    private userProvider: UserProvider,
    private toastCtrl: TranslateToastController,
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
    private imgcache: ImgcacheService,
    private socialSharing: SocialSharing,
    private translate: TranslateService,
    private deepLinks: DeepLinksProvider,
    private analytics: FirebaseAnalytics,
  ) {
    const params: Observable<AreaDetailParams> =
      this.navParams.get('params') ||
      ((this._navCtrl as any).rootParams &&
        (this._navCtrl as any).rootParams.params);

    params.subscribe(
      ({ area, org, products, species, tabsCtrl, rootNavCtrl }) => {
        if (this.area !== area && area) {
          area.images
            .then((images) => this.getCachedImages(images))
            .then((images) => {
              console.log(images);
              this.images = images;
            });
        }
        this.navCtrl = rootNavCtrl;
        this.tabsCtrl = tabsCtrl;
        this.species = species;
        this.org = org;
        this.products = products;
        this.area = area;
        if (this.contentRef) {
          this.contentRef.resize();
        }
      },
    );
  }

  private getCachedImages(images: AreaImage[]): Promise<AreaImage[]> {
    return Promise.all(
      images.map(async (img) => {
        const cachedImg = await this.imgcache.getCachedFile(img.file);
        console.log(img.file, cachedImg);
        img.file =
          cachedImg &&
          (this.sanitizer.bypassSecurityTrustUrl(cachedImg) as string);
        return img;
      }),
    ).then((imgs) => {
      console.log(imgs);
      return imgs.filter((img) => !!img.file);
    });
  }

  async toggleFavorite() {
    if (this.sessionData.token) {
      try {
        await this.userProvider.toggleFavorite(this.area);
      } catch (e) {
        console.log(e);
        if (e && e.error_code === IFISKE_ERRORS.NO_SUCH_AREA_EXISTS) {
          return;
        } else {
          throw e;
        }
      }
      this.toastCtrl.show({
        message: this.area.favorite
          ? 'Area added to favorites'
          : 'Area removed from favorites',
        duration: 4000,
      });
    } else {
      const toast = await this.toastCtrl.show({
        message: 'Login required for favorite',
        duration: 6000,
        dismissOnPageChange: true,
        showCloseButton: true,
        closeButtonText: 'Log in',
      });
      toast.onDidDismiss((_data, role) => {
        if (role === 'close') {
          this.modalCtrl.create(LoginPage).present();
        }
      });
    }
  }

  gotoPermits() {
    // Getting the index in this way so that if we ever add more tabs or change the order it will still work
    const index = this.tabsCtrl._tabs.findIndex(
      (t) => t.tabUrlPath === 'AreasDetailPermitPage',
    );
    this.tabsCtrl.select(index);
  }

  gotoSpecies(fish: Fish) {
    this.navCtrl.push('SpeciesDetailPage', fish);
  }

  imageLoaded(_index: number) {
    this.slides.update();
  }

  initSlides() {
    this.slides.autoHeight = true;
    //this.slides.autoplay = 4000;
    //this.slides.loop = true;
    //(this as any).slides.updateOnImagesReady = true;
    console.log(this.slides);
    /*
    this.slides('onImagesReady', () => {
      console.log('images ready');
      this.slides.update();
    });
    */
  }

  share = async () => {
    const message = await this.translate
      .get('ui.share:area', { area: this.area.t })
      .toPromise();
    await this.socialSharing.share(
      message,
      this.area.org,
      undefined,
      this.deepLinks.getUrl(
        DeepLinks.organization,
        { orgId: '' + this.area.orgid },
        { bringMetadata: false },
      ),
    );
    this.analytics.logEvent('share', {
      content_type: 'Area',
      item_id: this.area.ID,
    });
  };
}
