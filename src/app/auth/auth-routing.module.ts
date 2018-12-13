import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { CutsomerProfileComponent } from './cutsomer-profile/cutsomer-profile.component';
import { MobileEditComponent } from './mobile-edit/mobile-edit.component';
import { AddressChangeComponent } from './address-change/address-change.component';


const routes: Routes = [
  
  
  {
    path:'changePassword',
    component: ChangePasswordComponent
  },
  {
    path: 'view-profile',
    component: CutsomerProfileComponent
  },
  {
    path: 'mobileedit',
    component: MobileEditComponent
  },
  {
    path: 'addresschange',
    component: AddressChangeComponent
  }


  

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
