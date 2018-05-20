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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
}
