import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { A11yChipSetDirective } from '../../directives/a11y.directive';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    RouterLink,
    MatChipsModule,
    A11yChipSetDirective,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
