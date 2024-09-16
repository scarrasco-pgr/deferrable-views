import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
type ProductsState = {
  products: Product[];
  isLoading: boolean;
  hasError: boolean;
  filter: string | undefined;
};

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  hasError: false,
  filter: undefined,
};

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, service = inject(ProductsService)) => ({
    async loadAll(): Promise<void> {
      patchState(store, { isLoading: true });
      const products = (await service.get()).products;
      patchState(store, { products, isLoading: false });
    },
    async query(term: string): Promise<void> {
      patchState(store, { isLoading: true });
      const products = (await service.query(term)).products;
      patchState(store, { products, isLoading: false });
    },
  }))
);
