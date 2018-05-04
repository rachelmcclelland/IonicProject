import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { Flashlight } from '@ionic-native/flashlight';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MoviesPage } from '../pages/movies/movies';
import { FlashlightPage } from '../pages/flashlight/flashlight';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieProvider } from '../providers/movie/movie';
import { IonicStorageModule } from '@ionic/storage';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FlashlightPage,
    MoviesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FlashlightPage,
    MoviesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    DataProvider
  ]
})
export class AppModule {}
