import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { tap } from 'rxjs/internal/operators/tap';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import { ProductsStore } from '../../store/products.store';
import { ErrorComponent } from '../error/error.component';
import { ResultsFoundComponent } from '../results-found/results-found.component';
@Component({
  standalone: true,
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    HighlightPipe,
    ResultsFoundComponent,
    ErrorComponent,
    MatSelectModule,
  ],
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  readonly store = inject(ProductsStore);
  filterControl = new FormControl(this.store.filter(), { nonNullable: true });
  limitControl = new FormControl(this.store.limit(), { nonNullable: true });
  search = toSignal(
    this.filterControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      tap((input) => this.store.query(input ?? ''))
    )
  );

  limitItems = toSignal(
    this.limitControl.valueChanges.pipe(
      distinctUntilChanged(),
      tap((limit) => {
        this.store.query(this.store.filter() ?? '', limit);
      })
    )
  );

  ngOnInit(): void {
    this.store.loadAll();
  }
  retry(): void {
    this.store.loadAll();
  }
}
