import {Component} from '@angular/core';

import { NavController } from 'ionic-angular';
import {Cart} from "../../providers/cart";
import {CheckoutPage} from "../checkout/checkout";

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage{

  constructor(public navCtrl: NavController, private cart: Cart) {

  }

  goToCheckout(){
    this.navCtrl.setRoot(CheckoutPage);
  }

}
