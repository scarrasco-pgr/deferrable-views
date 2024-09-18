import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductBaseDirective } from '../../directives/base-product.directive';

@Component({
  selector: 'app-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="flex justify-between">
      <span class="font-medium">Brand</span>
      <span>{{ product().brand }}</span>
    </div>
    <div class="flex justify-between">
      <span class="font-medium">Weight</span>
      <span>{{ product().weight }}</span>
    </div>
    <div class="flex justify-between">
      <span class="font-medium">Sku</span>
      <span>{{ product().sku }}</span>
    </div>
    <div class="flex justify-between">
      <span class="font-medium">Shipping Info</span>
      <span>{{ product().shippingInformation }}</span>
    </div>`,
})
export class DetailsComponent extends ProductBaseDirective {}
