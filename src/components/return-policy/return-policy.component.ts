import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductBaseDirective } from '../../directives/base-product.directive';

@Component({
  selector: 'app-return-policy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="flex justify-between">
      <span class="font-medium">Warranty Info</span>
      <span>{{ product().warrantyInformation }}</span>
    </div>
    <div class="flex justify-between">
      <span class="font-medium">Return Policy</span>
      <span>{{ product().returnPolicy }}</span>
    </div>`,
})
export class ReturnPolicyComponent extends ProductBaseDirective {}
