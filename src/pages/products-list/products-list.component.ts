import { Component , EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { cart } from '../cart';
import { NavController } from 'ionic-angular';
import { WishlistPage } from '../wishlist/wishlist';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {
  @Input() productList: Product;
  @Input() store: boolean;
  @Output() wishedProduct: EventEmitter<Product>;

constructor (private nav : NavController) {
  this.wishedProduct = new EventEmitter();
}

 productWasSelected(product: Product): void {
   this.wishedProduct.emit(product);
   cart.push(product);
  // Let's navigate from TabsPage to Page1
   this.nav.push(WishlistPage); // navigate to wishlist
 }

}
