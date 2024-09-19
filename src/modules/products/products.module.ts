import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DetailsComponent } from '../../components/details/details.component';
import { DimensionsComponent } from '../../components/dimensions/dimensions.component';
import { ErrorComponent } from '../../components/error/error.component';
import { HomeComponent } from '../../components/home/home.component';
import { ImagesComponent } from '../../components/images/images.component';
import { OverviewComponent } from '../../components/overview/overview.component';
import { ProductDetailComponent } from '../../components/product-detail/product-detail.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { ResultsFoundComponent } from '../../components/results-found/results-found.component';
import { ReturnPolicyComponent } from '../../components/return-policy/return-policy.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import { ProductsRoutingModule } from './products.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HighlightPipe,
    MatInputModule,
    MatSelectModule,
    ProductsRoutingModule,
  ],
  declarations: [
    DetailsComponent,
    DimensionsComponent,
    ErrorComponent,
    HomeComponent,
    ImagesComponent,
    OverviewComponent,
    ProductDetailComponent,
    ProductsListComponent,
    ResultsFoundComponent,
    ReturnPolicyComponent,
    ReviewsComponent,
    StarRatingComponent,
  ],
})
export class ProductsModule {}
