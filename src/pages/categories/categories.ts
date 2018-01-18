import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {WebserviceallProvider} from "../../providers/webserviceall/webserviceall";

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  resposnsdata:any;
  categarylist:any;
  categaryname:any;

  constructor(private calldata:WebserviceallProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,private toastCtrl: ToastController)
  {
    this.getshowlist();
  }

  getshowlist(){
    console.log("Call Login");
    this.presentLoading();
      this.calldata.categarylist().then((result) => {

        this.resposnsdata = result;
        console.log(this.resposnsdata);
        this.categarylist = this.resposnsdata.data;
        //check user name
        //console.log("print login Response >>"+this.resposnsdata);
        if (this.resposnsdata.status === 200) {

        }
        else
        {
          this.presentToast(this.resposnsdata.message);
        }
      }, (err) => {
        console.log("Error Block Call");
        this.presentToast("Server Problem");
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
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

  addcategary() {
    console.log(this.categaryname);
    this.categaryname = '';
  }
    editbtn(idcat)
    {

    }
}
