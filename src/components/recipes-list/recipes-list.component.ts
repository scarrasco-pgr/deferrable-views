import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: 'recipes-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {}
