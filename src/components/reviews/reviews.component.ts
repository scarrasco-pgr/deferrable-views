import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  imports: [MatIconModule, MatCardModule, DatePipe],
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
  product = input.required<Product>();
}
