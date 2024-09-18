import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PostsListComponent } from '../components/posts-list/posts-list.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { RecipesListComponent } from '../components/recipes-list/recipes-list.component';

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
    component: ProductsListComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'posts',
    component: PostsListComponent,
  },

  {
    path: 'recipes',
    component: RecipesListComponent,
  },
];
