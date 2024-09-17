import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import {
  setError,
  setFulfilled,
  setLoading,
  withRequestStatus,
} from './request-status.feature';
type ProductsState = {
  products: Product[];
  filter: string | undefined;
};

const initialState: ProductsState = {
  products: [],
  filter: undefined,
};

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withRequestStatus(),
  withMethods((store, service = inject(ProductsService)) => ({
    async loadAll(): Promise<void> {
      patchState(store, setLoading());
      try {
        const products = (await service.get()).products;
        patchState(store, { products });
      } catch (e) {
        patchState(store, setError(e as string));
      } finally {
        patchState(store, setFulfilled);
      }
    },
    async query(filter: string): Promise<void> {
      patchState(store, { filter }, setLoading());
      const products = (await service.query(filter)).products;
      patchState(store, { products }, setFulfilled());
    },
  }))
);
