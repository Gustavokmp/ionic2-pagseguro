import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Auth} from "../../providers/auth";
import {TabsPage} from "../tabs/tabs";
import 'rxjs/add/operator/toPromise';
import {Headers, RequestOptions, Http} from "@angular/http";

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var PagSeguroDirectPayment;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: String;
  password: String;

  constructor(public navCtrl: NavController,
              private auth: Auth, private http:Http,
              private alert:AlertController) {}

  login(){
    //noinspection TypeScriptUnresolvedFunction
    this.auth.login(this.email, this.password)
        .then(response => {
              this.getSession();
              this.navCtrl.setRoot(TabsPage)
            },
            responseError => {
              let alert = this.alert.create({
                title: 'Mensagem de erro',
                message: 'Não foi possivel realizar o login',
                buttons: ['OK']
              });
              alert.present();
            });
  }

  getSession(){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('token')
    });
    let options = new RequestOptions({headers: headers});
    this.http.get('http://localhost:8000/api/session',options)
        .toPromise().then(response => PagSeguroDirectPayment.setSessionId(response.json().sessionId))
  }
}
