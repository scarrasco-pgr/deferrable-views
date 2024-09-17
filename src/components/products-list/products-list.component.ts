import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { tap } from 'rxjs/internal/operators/tap';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import { ProductsStore } from '../../store/products.store';
import { ResultsFoundComponent } from '../results-found/results-found.component';
@Component({
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    HighlightPipe,
    ResultsFoundComponent,
  ],
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html',
})
export class ProductsListComponent implements OnInit {
  readonly store = inject(ProductsStore);
  control = new FormControl(this.store.filter(), { nonNullable: true });
  search = toSignal(
    this.control.valueChanges.pipe(
      debounceTime(500),
      tap((input) => this.store.query(input ?? ''))
    )
  );
  ngOnInit(): void {
    this.store.loadAll();
  }
}
