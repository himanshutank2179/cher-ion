import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//storage
import { Storage } from '@ionic/storage';

import {LoginPage} from "../pages/login/login";
import {MaintabPage} from "../pages/maintab/maintab";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(private storage: Storage,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    storage.get('token').then((val) => {
      console.log('Your Token is', val);
      if(val === null || val === "non")
      {
        this.rootPage = LoginPage;
      }else
      {
        this.rootPage=MaintabPage;
      }

    });
  }
}

