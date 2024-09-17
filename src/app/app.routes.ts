import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('../components/products-list/products-list.component').then(
        (c) => c.ProductsListComponent
      ),
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('../components/product-detail/product-detail.component').then(
        (c) => c.ProductDetailComponent
      ),
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('../components/posts-list/posts-list.component').then(
        (c) => c.PostsListComponent
      ),
  },

  {
    path: 'recipes',
    loadComponent: () =>
      import('../components/recipes-list/recipes-list.component').then(
        (c) => c.RecipesListComponent
      ),
  },
];
