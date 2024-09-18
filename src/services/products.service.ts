import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { environment } from '../environments/environment';
import { Pagination } from '../models/pagination.model';
import { Product } from '../models/product.model';

interface ProductsResponse extends Pagination {
  products: Product[];
}
@Injectable({ providedIn: 'root' })
export class ProductsService {
  #client = inject(HttpClient);
  #route = 'products';
  get(limit?: number) {
    return firstValueFrom(
      this.#client.get<ProductsResponse>(
        `${environment.apiUrl}/${this.#route}/?limit=${limit}`
      )
    );
  }
  query(filter: string, limit?: number) {
    return firstValueFrom(
      this.#client.get<ProductsResponse>(
        `${environment.apiUrl}/${this.#route}/search?q=${filter}&limit=${limit}`
      )
    );
  }
  getSingle(id: string) {
    return firstValueFrom(
      this.#client.get<Product>(`${environment.apiUrl}/${this.#route}/${id}`)
    );
  }
}
