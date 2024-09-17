import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { ProductsStore } from '../../store/products.store';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ImagesComponent } from '../images/images.component';
@Component({
  standalone: true,
  imports: [
    MatTabsModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    ReviewsComponent,
    ImagesComponent,
  ],
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {
  store = inject(ProductsStore);
  id = input.required<string>();

  ngOnInit(): void {
    this.store.loadSingle(this.id());
  }
}
