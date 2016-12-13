import {Component, OnInit, ViewChild} from '@angular/core';
import {NavController, Nav} from 'ionic-angular';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Cart} from "../../providers/cart";
import {CartPage} from "../cart/cart";


@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage implements OnInit{
  @ViewChild(Nav) nav: Nav;
  products: Array<any>;

  constructor(public navCtrl: NavController,
              private http: Http,
              private cart: Cart) {}

  ngOnInit():any {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('token')
    });
    let options = new RequestOptions({headers: headers});

    this.http.get('http://localhost:8000/api/products',options)
        .toPromise().then(response => this.products = response.json())
  }

  addItem(item){
    this.cart.addItem(item);
    this.navCtrl.setRoot(CartPage);
  }
}
