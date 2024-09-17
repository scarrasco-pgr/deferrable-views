import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../models/product.model';
import { Carousel, CarouselItem } from '../carousel/carousel.component';

@Component({
  standalone: true,
  imports: [Carousel, CarouselItem, MatCardModule],
  selector: 'app-images',
  templateUrl: 'images.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesComponent {
  product = input.required<Product>();
}
