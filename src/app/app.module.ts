import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComponentsModule } from '../components/components.module';
import { RecordsService } from '../services/records.service';
import { PlayFolderPage } from '../pages/play-folder/play-folder';
import { EduyotService } from '../services/eduyot.service';
import { CommunitiesPage } from '../pages/communities/communities';
import { CommunityPage } from '../pages/community/community';
import { PersonPage } from '../pages/person/person';
import { AboutPage } from '../pages/about/about';
import { AppStateService } from '../services/app-service.service';
import { CommunityPlacePage } from '../pages/community-place/community-place';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    CommunitiesPage,
    CommunityPage,
    PersonPage,
    PlayFolderPage,
    CommunityPlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    CommunitiesPage,
    CommunityPage,
    PersonPage,
    PlayFolderPage,
    CommunityPlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecordsService,
    EduyotService,
    AppStateService
  ]
})
export class AppModule {}
