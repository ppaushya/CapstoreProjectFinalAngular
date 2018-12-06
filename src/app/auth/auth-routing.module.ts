import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { MerchantPageComponent } from './merchant-page/merchant-page.component';
import { ForgotPasswordComponent } from './forgot-Password/forgot-Password.component';
import { MerchantSignInComponent } from './merchant-sign-in/merchant-sign-in.component';


const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInPageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  },
  {
    path: 'merchant',
    component: MerchantPageComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path:'merchant-sign-in',
    component: MerchantSignInComponent,
  }

  

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
