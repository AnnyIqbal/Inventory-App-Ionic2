import { Component, Input } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html'
})
export class ProductImageComponent {
  @Input() product: Product;
}
