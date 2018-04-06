import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

import { Product } from '../../providers/product/product';
import { TranslateAlertController } from '../../providers/translate-alert-controller/translate-alert-controller';
import { TermsProvider } from '../../providers/terms/terms';
import { UserProvider } from '../../providers/user/user';
import { TranslateToastController } from '../../providers/translate-toast-controller/translate-toast-controller';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

export const SMS_PURCHASE_NUMBER = '72456';

@IonicPage()
@Component({
  selector: 'page-sms-purchase',
  templateUrl: 'sms-purchase.html',
})
export class SmsPurchasePage {
  product: Product;

  approvedRules = false;

  // Show sms terms if not agreed to
  // Display Modal with your name

  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: TranslateAlertController,
    private terms: TermsProvider,
    private sms: SMS,
    private userProvider: UserProvider,
    private toastCtrl: TranslateToastController,
    private ga: GoogleAnalytics,
  ) {
    this.product = this.navParams.get('product');
    this.approvedRules = localStorage.getItem('sms-approval') === 'YES';
  }

  close() {
    return this.viewCtrl.dismiss();
  }

  async persistApproval() {
    console.log(this);
    if (this.approvedRules) {
      const alert = await this.alertCtrl.show({
        cssClass: 'alert-large sms-rules',
        message: this.terms.smsTerms,
        title: 'SMS Rules',
        buttons: [{
          text: 'Cancel',
        }, {
          text: 'Accept',
          role: 'accept',
        }],
      });
      const role = await new Promise((resolve) => {
        alert.onDidDismiss((_, role) => resolve(role));
      });
      if (role !== 'accept') {
        this.approvedRules = false;
      }
    }
    localStorage.setItem('sms-approval', this.approvedRules ? 'YES' : 'NO');
  }

  async sendSms() {
    let name = "";
    try {
      name = (await this.userProvider.getInfo()).name;
    } catch (e) {
      // No user found, maybe not logged in, it's ok
    }

    const alert = await this.alertCtrl.show({
      title: 'What is your name?',
      inputs: [
        {
          name: 'name',
          placeholder: 'ui.placeholder.fullname',
          value: name,
        },
      ],
      buttons: [{
        text: 'Send',
        role: 'send',
      }],
    });

    try {
      name = await new Promise<string>((resolve, reject) => alert.onDidDismiss(({ name }: { name: string }, role) => {
        if (role === 'send' && name) {
          resolve(name);
        } else {
          reject('errors.fullname.required');
        }
      }));
    } catch (e) {
      this.toastCtrl.show({
        message: e,
        duration: 4000,
      });
      return;
    }

    const message = `FISKA ${this.product.pf} ${name}`;

    try {
      this.ga.trackEvent('Purchase', 'SMS', '' + this.product.ID);
      await this.sms.send(SMS_PURCHASE_NUMBER, message, { android: { intent: 'INTENT' } });
      this.close();

    } catch (e) {
      this.alertCtrl.show({
        title: 'Error',
        message: e,
        buttons: [{
          text: 'OK',
          role: 'cancel',
        }],
      })
    }
  }
}
