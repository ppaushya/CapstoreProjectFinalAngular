import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { FormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { ForgotPasswordComponent } from './forgot-Password/forgot-Password.component';
import { MainHeaderComponent } from '../header/main-header/main-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    UiModule,
  ],
  declarations: [SignInPageComponent, SignUpPageComponent,ForgotPasswordComponent],
})
export class AuthModule {
}
