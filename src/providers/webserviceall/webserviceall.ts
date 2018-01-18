import { Injectable } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/do";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
/*
  Generated class for the WebserviceallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebserviceallProvider {
  apiUrl : string = "https://cher.vytech.co/api/";
  tokenall:string = "";
  userid:string = "";
  constructor(public http: Http,private storage: Storage) {
    console.log('Hello WebserviceallProvider Provider');
    this.storage.get('token').then((val) => {
      console.log('Your Token is', val);
      if(val === null)
      {

      }else
      {
        this.tokenall = val;
      }
    });
    this.storage.get('userid').then((val) => {
      console.log('Your Token is', val);
      if(val === null)
      {

      }else
      {
        this.userid = val;
      }
    });
  }

  //categary List
  categarylist(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      console.log("signup call");
      this.http.get(this.apiUrl + 'category', { headers : headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err.json());
        });
    });
  }


  //Login Page
  login(data)
  {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      console.log("signup call");
      this.http.post(this.apiUrl + 'login', data, { headers : headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err.json());
        });
    });
  }
}
