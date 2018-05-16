import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ContactPage],
  imports: [IonicPageModule.forChild(ContactPage), TranslateModule],
})
export class ContactPageModule {}
