import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-recipes-list',
    templateUrl: 'recipes-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent {}
