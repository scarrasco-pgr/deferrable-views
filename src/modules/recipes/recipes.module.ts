import { NgModule } from '@angular/core';
import { RecipesListComponent } from '../../components/recipes-list/recipes-list.component';
import { RecipesRoutingModule } from './recipes.routing.module';

@NgModule({
  imports: [RecipesRoutingModule],
  declarations: [RecipesListComponent],
})
export class RecipesModule {}
