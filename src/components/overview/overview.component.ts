import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductBaseDirective } from '../../directives/base-product.directive';
@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent extends ProductBaseDirective {}
