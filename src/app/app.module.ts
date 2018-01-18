import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import { WebserviceallProvider } from '../providers/webserviceall/webserviceall';
import { HttpModule, } from '@angular/http';
import {InterceptorModule} from "./interceptor.module";
import { IonicStorageModule } from '@ionic/storage';
import {MaintabPage} from "../pages/maintab/maintab";
import {ServicePage} from "../pages/service/service";
import {StaffPage} from "../pages/staff/staff";
import {UsersPage} from "../pages/users/users";
import {DashboardPage} from "../pages/dashboard/dashboard";
import {AppointmentPage} from "../pages/appointment/appointment";
import {BranchesPage} from "../pages/branches/branches";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MaintabPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    InterceptorModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MaintabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebserviceallProvider
  ]
})
export class AppModule {}
