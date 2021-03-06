import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Permit } from '../../providers/user/userTypes';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import {
  DeepLinksProvider,
  DeepLinks,
} from '../../providers/deep-links/deep-links';

@IonicPage({
  defaultHistory: ['HomePage', 'MyPermitsPage'],
  segment: 'permit-detail/:ID',
})
@Component({
  selector: 'page-permit-detail',
  templateUrl: 'permit-detail.html',
})
export class PermitDetailPage {
  permit: Permit;
  failed = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private modalCtrl: ModalController,
    private deepLinks: DeepLinksProvider,
  ) {}

  async ionViewWillEnter() {
    if (this.navParams.get('t')) {
      this.permit = this.navParams.data;
    }
    if (this.navParams.get('ID') != undefined) {
      try {
        // Det finns ett ID, hämta data från DB
        this.permit = await this.userProvider.getProduct(
          this.navParams.get('ID'),
        );
      } catch (err) {
        console.warn(err);
      }
    }
    if (!this.permit || !this.permit.t) {
      this.failed = true;
    }
    console.log(this.permit);
  }

  openRules() {
    this.modalCtrl
      .create('PermitRulesPage', {
        t: this.permit.rule_t,
        d: this.permit.rule_d,
        ver: this.permit.rule_ver,
      })
      .present();
  }

  openCatchReport() {
    this.deepLinks.open(
      DeepLinks.catchReport,
      { ID: '' + this.permit.code },
      { bringSession: true },
    );
  }
}
