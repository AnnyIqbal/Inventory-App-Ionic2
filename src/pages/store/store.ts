import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from '../product';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StorePage {
     @ViewChild('myNav') nav: NavController

product: Product[];

constructor(public navCtrl: NavController) {
  this.product = [
    new Product(
    'NICEHAT', // sku
    'A Nice Black Hat', // name
    '../../assets/Images/black-hat.jpg', // img url
    ['Men', 'Accessories', 'Hats'], // dept
    56), // price
    new Product(
      'NEATOJACKET',
      'Blue Jacket',
      '../../assets/Images/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      238.99),
    new Product(
      'MYSHOES',
      'Black Running Shoes',
      '../../assets/Images/black-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      109.99)
  ];
}

navigate(event) { //route to wishlist component HOW?
  console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%', event);
  // this.nav.push('WishlistPage');

}
}
