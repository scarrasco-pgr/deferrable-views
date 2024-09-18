import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductBaseDirective } from '../../directives/base-product.directive';
import { DetailsComponent } from '../details/details.component';
import { DimensionsComponent } from '../dimensions/dimensions.component';
import { ReturnPolicyComponent } from '../return-policy/return-policy.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
@Component({
  standalone: true,
  imports: [
    StarRatingComponent,
    DimensionsComponent,
    DetailsComponent,
    ReturnPolicyComponent,
    MatChipsModule,
    CurrencyPipe,
    MatExpansionModule,
  ],
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent extends ProductBaseDirective {}
