import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-results-found',
  templateUrl: 'results-found.component.html',
})
export class ResultsFoundComponent {
  results = input<number>();
}
