import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [MatIcon],
  selector: 'app-rating',
  templateUrl: 'star-rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
  rating = input.required<number>();
  reviews = input.required<number>();
  get stars() {
    return Array(Math.floor(this.rating())).fill(0);
  }
}
