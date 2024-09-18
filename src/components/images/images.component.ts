import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductBaseDirective } from '../../directives/base-product.directive';

@Component({
  standalone: true,
  imports: [MatCardModule],
  selector: 'app-images',
  templateUrl: 'images.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesComponent extends ProductBaseDirective {}
