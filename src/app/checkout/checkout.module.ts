import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';

import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { ShipmentComponent } from './checkout-page/checkout-page.component';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    UiModule,
    FormsModule,
  ],
  declarations: [ShipmentComponent],
})
export class CheckoutModule {
}
