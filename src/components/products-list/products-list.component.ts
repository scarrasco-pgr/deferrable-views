import { NgOptimizedImage } from '@angular/common';
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
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { distinctUntilChanged } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { tap } from 'rxjs/internal/operators/tap';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import { ProductsStore } from '../../store/products.store';
import { selectQueryParam } from '../../store/router.selectors';
import { ErrorComponent } from '../error/error.component';
import { ResultsFoundComponent } from '../results-found/results-found.component';
import { QUERY_PARAMS } from './query-paramter.constants';
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
    NgOptimizedImage,
  ],
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  query = inject(Store).selectSignal(selectQueryParam(QUERY_PARAMS.QUERY));
  limit = inject(Store).selectSignal(selectQueryParam(QUERY_PARAMS.LIMIT));
  router = inject(Router);
  readonly store = inject(ProductsStore);
  filterControl = new FormControl(this.store.filter(), { nonNullable: true });
  limitControl = new FormControl(this.store.limit(), { nonNullable: true });
  search = toSignal(
    this.filterControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      tap((input) => {
        this.store.query(input ?? '');
        this.router.navigate([], {
          queryParams: { q: input },
          queryParamsHandling: 'merge',
        });
      })
    )
  );

  limitItems = toSignal(
    this.limitControl.valueChanges.pipe(
      distinctUntilChanged(),
      tap((limit) => {
        this.store.query(this.store.filter() ?? '', limit);
        this.router.navigate([], {
          queryParams: { limit },
          queryParamsHandling: 'merge',
        });
      })
    )
  );

  ngOnInit(): void {
    this.query() || this.limit() ? this.setControl() : this.store.loadAll();
  }
  retry(): void {
    this.store.loadAll();
  }

  setControl(): void {
    this.query() ? this.filterControl.setValue(this.query() as string) : null;
    this.limit() ? this.limitControl.setValue(Number(this.limit())) : null;
  }
}
