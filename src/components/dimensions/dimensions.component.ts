import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductBaseDirective } from '../../directives/base-product.directive';

@Component({
  selector: 'app-dimensions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="flex justify-between">
      <span class="font-medium">Width</span>
      <span>{{ product().dimensions.width }}</span>
    </div>
    <div class="flex justify-between">
      <span class="font-medium">Depth</span>
      <span>{{ product().dimensions.depth }}</span>
    </div>
    <div class="flex justify-between">
      <span class="font-medium">Height</span>
      <span>{{ product().dimensions.height }}</span>
    </div>`,
})
export class DimensionsComponent extends ProductBaseDirective {}
