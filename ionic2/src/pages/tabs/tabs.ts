import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CartPage } from '../cart/cart';
import { ContactPage } from '../contact/contact';
import { ProductsPage } from '../products/products';
import {CheckoutPage} from "../checkout/checkout";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = CartPage;
  tab3Root: any = ContactPage;
  tab4Root: any = ProductsPage;
  tab5Root: any = CheckoutPage;

  constructor() {

  }
}
