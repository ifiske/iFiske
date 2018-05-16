import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  tabs = [
    { uri: 'AdminPermitListPage', title: 'List', icon: 'ifiske-permit' },
    { uri: 'AdminCheckPage', title: 'Check', icon: 'barcode' },
    { uri: 'AdminStatsPage', title: 'Statistics', icon: 'stats' },
    { uri: 'AdminInfoPage', title: 'Information', icon: 'information-circle' },
  ];

  tabParams: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabParams = {
      navCtrl: this.navCtrl,
    };
    console.log('in admin.ts', this.tabParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
}
