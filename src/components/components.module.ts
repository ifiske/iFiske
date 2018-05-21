import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { AdsComponent } from './ads/ads';
import { IonicModule } from 'ionic-angular';
import { YoutubeComponent } from './youtube/youtube';
import { FishLevelComponent } from './fish-level/fish-level';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { IonErrorsComponent } from './ion-errors/ion-errors';
import { IonDataFormComponent } from './ion-data-form/ion-data-form';
import { PipesModule } from '../pipes/pipes.module';
import { PermitComponent } from './permit/permit';
import { UserInformationComponent } from './user-information/user-information';
import { AdminHeaderComponent } from './admin-header/admin-header';
import { ChartComponent } from './chart/chart';
import { ImgcacheModule } from '../imgcache/imgcache.module';
import { TabNavbarComponent } from './tab-navbar/tab-navbar';

@NgModule({
  declarations: [
    MapComponent,
    AdsComponent,
    YoutubeComponent,
    FishLevelComponent,
    FaIconComponent,
    IonErrorsComponent,
    IonDataFormComponent,
    PermitComponent,
    UserInformationComponent,
    AdminHeaderComponent,
    ChartComponent,
    TabNavbarComponent,
  ],
  imports: [IonicModule, TranslateModule, PipesModule, ImgcacheModule],
  exports: [
    MapComponent,
    AdsComponent,
    YoutubeComponent,
    FishLevelComponent,
    FaIconComponent,
    IonErrorsComponent,
    IonDataFormComponent,
    PermitComponent,
    UserInformationComponent,
    AdminHeaderComponent,
    ChartComponent,
    TabNavbarComponent,
  ],
})
export class ComponentsModule {}
