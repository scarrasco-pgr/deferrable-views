import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import {
  setFulfilled,
  setLoading,
  withRequestStatus,
} from './request-status.feature';
type ProductsState = {
  products: Product[];
  product: Product | undefined;
  filter: string | undefined;
  error: string | undefined;
  limit: number;
};

const initialState: ProductsState = {
  products: [],
  product: undefined,
  filter: undefined,
  error: undefined,
  limit: 60,
};

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withRequestStatus(),
  withMethods((store, service = inject(ProductsService)) => ({
    async loadAll(): Promise<void> {
      patchState(store, initialState, setLoading());
      try {
        const products = (await service.get(store.limit())).products;
        patchState(store, { products });
      } catch (e) {
        const error = (e as HttpErrorResponse).message;
        patchState(store, { error });
      } finally {
        patchState(store, setFulfilled);
      }
    },
    async loadSingle(id: string): Promise<void> {
      patchState(store, initialState, setLoading());
      try {
        const product = await service.getSingle(id);
        patchState(store, { product });
      } catch (e) {
        const error = (e as HttpErrorResponse).message;
        patchState(store, { error });
      } finally {
        patchState(store, setFulfilled);
      }
    },
    async query(filter: string, limit?: number): Promise<void> {
      patchState(
        store,
        { filter, limit: limit ?? store.limit() },
        setLoading()
      );
      const products = (await service.query(filter, store.limit())).products;
      patchState(store, { products }, setFulfilled());
    },
  }))
);
