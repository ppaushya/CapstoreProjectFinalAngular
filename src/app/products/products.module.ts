import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { CardComponent } from './card/card.component';
import { ListPageComponent } from './list-page/list-page.component';

import { ProductsRoutingModule } from './products-routing.module';
import { SortComponent } from './sort/sort.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { ListPagePipe } from './list-page/list-page.pipe';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    UiModule,
  ],
  declarations: [
    ListPageComponent,
    ViewPageComponent,
    SortComponent,
    CardComponent,
    ListPagePipe,
    FeedbackComponent,
    
  ],
  exports: [ListPagePipe]
})
export class ProductsModule {
}
