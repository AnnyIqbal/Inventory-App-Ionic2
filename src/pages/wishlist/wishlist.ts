import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from '../product';
import { cart } from '../cart';

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {
  mycart: Product[] = cart;

  constructor(public navCtrl: NavController) {}
}
