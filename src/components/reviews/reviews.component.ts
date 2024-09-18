import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductBaseDirective } from '../../directives/base-product.directive';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent extends ProductBaseDirective {}
