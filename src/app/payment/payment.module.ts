import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    UiModule,
    FormsModule,
  ],
  declarations: [PaymentComponent],
})
export class PaymentModule { 
}
