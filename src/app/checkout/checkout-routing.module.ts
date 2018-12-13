import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentComponent } from './checkout-page/checkout-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShipmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {
}
