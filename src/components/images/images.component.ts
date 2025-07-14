import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductBaseDirective } from '../../directives/base-product.directive';
import { ProductsStore } from '../../store/products.store';

@Component({
    imports: [MatCardModule],
    selector: 'app-images',
    templateUrl: 'images.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesComponent extends ProductBaseDirective {
  store = inject(ProductsStore);
}
