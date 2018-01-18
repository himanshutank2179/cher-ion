import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';

import { Storage } from '@ionic/storage';
import {WebserviceallProvider} from "../../providers/webserviceall/webserviceall";
import {HomePage} from "../home/home";
import {MaintabPage} from "../maintab/maintab";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  Logindata = {email:'',password:'',};
  resposnsdata : any;
  constructor(private storage: Storage,private calldata:WebserviceallProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,private toastCtrl: ToastController)
  {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  Login() {
    console.log("Call Login");
    this.presentLoading();
    if(this.Logindata.email === "" || this.Logindata.password === "")
    {
      this.presentToast("Fill out all the fields");
    }else
    {

      this.calldata.login(this.Logindata).then((result) => {

        this.resposnsdata = result;
        console.log(this.resposnsdata);
        //check user name
        //console.log("print login Response >>"+this.resposnsdata);
        if (this.resposnsdata.status === 200) {
          this.presentToast(this.resposnsdata.message);
          this.Logindata = {email:'',password:'',};

          this.storage.set('username', this.resposnsdata.data.username);
          this.storage.set('userid', this.resposnsdata.data._id);
          console.log("userid == Logintime"+ this.resposnsdata.data._id);
          this.storage.set('email', this.resposnsdata.data.email);
          this.storage.set('last_name', this.resposnsdata.data.last_name);
          this.storage.set('first_name', this.resposnsdata.data.first_name);
          this.storage.set('token', this.resposnsdata.token);
          // this.navCtrl.push(HomePage);
          this.navCtrl.setRoot(MaintabPage);
        }
        else
        {
          this.presentToast(this.resposnsdata.message);
        }
      }, (err) => {
        console.log("Error Block Call");
        this.presentToast("Server Problem");
      });
      // this.storage.set('username', this.Logindata.email);
      // this.storage.set('password', this.Logindata.password);
      // this.navCtrl.push(AppoirtmentPage);
    }

  }
}
