import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html'
})
export class ProductRowComponent {
  @Input() product: Product;
  @Input() inStore: boolean;
  @Output() wishedProduct: EventEmitter<Product>;

  constructor() {
    this.wishedProduct = new EventEmitter();
  }
  add2cart(p: Product) {
    this.wishedProduct.emit(p);
  }
}

