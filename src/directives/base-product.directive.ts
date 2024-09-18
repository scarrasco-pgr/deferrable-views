import { Directive, input } from '@angular/core';
import { Product } from '../models/product.model';

@Directive()
export class ProductBaseDirective {
  product = input.required<Product>();
}
