import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Area } from '../../providers/area/area';
import { Organization } from '../../providers/organization/organization';
import { SuperTabs } from 'ionic2-super-tabs';
import { Product } from '../../providers/product/product';
import { UserProvider } from '../../providers/user/user';
import { SessionProvider } from '../../providers/session/session';
import { TranslateToastController } from '../../providers/translate-toast-controller/translate-toast-controller';

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

  private slides: Slides;

  private tabsCtrl: SuperTabs;

  @ViewChild('slides') set slidesSetter(slides: Slides) {
    if (!this.slides && slides) {
      this.slides = slides;
      this.initSlides();
    }
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sessionData: SessionProvider,
    private userProvider: UserProvider,
    private toastCtrl: TranslateToastController,
  ) {
    this.navParams.get('params').subscribe(({ area, org, products, tabsCtrl }) => {
      this.tabsCtrl = tabsCtrl;
      this.area = area;
      this.org = org;
      this.products = products;
      if (this.area) {
        this.area.images.then(images => this.images = images);
      }
    });
  }

  async toggleFavorite() {
    if (this.sessionData.token) {
      const favorite = await this.userProvider.toggleFavorite(this.area);
      this.toastCtrl.show({
        message: favorite ? 'Area added to favorites' : 'Area removed from favorites',
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
      toast.onDidDismiss((data, role) => {
        if (role === 'close') {
          // this.modalCtrl.create(LoginComponent).present();
        }
      })
    }
  }

  gotoPermits() {
    this.tabsCtrl.slideTo('AreasDetailPermitPage');
  }

  imageLoaded(i: number) {
    if (i === 0)
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
}
