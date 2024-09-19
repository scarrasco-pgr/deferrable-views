import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('../modules/posts/posts.module').then((m) => m.PostsModule),
  },

  {
    path: 'recipes',
    loadChildren: () =>
      import('../modules/recipes/recipes.module').then((m) => m.RecipesModule),
  },
];
