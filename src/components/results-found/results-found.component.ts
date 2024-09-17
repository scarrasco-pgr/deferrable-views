import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-results-found',
  templateUrl: 'results-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsFoundComponent {
  results = input<number>();
}
