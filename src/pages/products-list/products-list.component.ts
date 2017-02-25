import { Component , EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { cart } from '../cart';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {
  @Input() productList: Product;
  @Input() store: boolean;
  @Output() wishedProduct: EventEmitter<Product>;

constructor () {
  this.wishedProduct = new EventEmitter();
}

 productWasSelected(product: Product): void {
   this.wishedProduct.emit(product);
   cart.push(product);
  //  this.route.navigate(['wishlist']); // navigate to wishlist
 }

}
