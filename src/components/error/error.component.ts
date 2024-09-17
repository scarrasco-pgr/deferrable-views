import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  selector: 'app-error',
  templateUrl: 'error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  onRetry = output<boolean>();
}
