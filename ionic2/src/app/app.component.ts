import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
//import { TabsPage } from '../pages/tabs/tabs';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {LoginPage} from "../pages/login/login";
import {Cart} from "../providers/cart";
import {Auth} from "../providers/auth";



@Component({
  templateUrl: 'app.html',
  providers: [Cart, Auth]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = LoginPage;

  constructor(platform: Platform, private http: Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    //this.getSession();
  }

  /*getSession(){
    this.http.get('http://localhost:8000/api/session').toPromise()
        .then(response => PagSeguroDirectPayment.setSessionId(response.json().sessionId));
  }*/
}
