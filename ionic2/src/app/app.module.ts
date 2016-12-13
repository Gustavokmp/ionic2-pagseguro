import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Cart } from '../providers/cart';
import { MyApp } from './app.component';
import { CartPage } from '../pages/cart/cart';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { CheckoutPage } from '../pages/checkout/checkout'
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {Auth} from "../providers/auth";

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    ContactPage,
    HomePage,
    ProductsPage,
    CheckoutPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    ContactPage,
    HomePage,
    ProductsPage,
    CheckoutPage,
    LoginPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Cart, Auth]
})
export class AppModule {}
