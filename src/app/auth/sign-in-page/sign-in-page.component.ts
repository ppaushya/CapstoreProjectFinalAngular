import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { SignInPageService } from './sign-in-page.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  
  login:Login=new Login();
  
  validLogin:Login=new Login();
  validEmail:boolean=false;
  constructor(private _service:SignInPageService, private _router:Router) { }

  ngOnInit() {
  }

  validateLogin()
  {
    this._service.validateEmail(this.login).subscribe(
      validLogin=>{
        this.login.userTypes="MERCHANT";
      if(validLogin.userTypes=="CUSTOMER")
      {
        this._router.navigate(['/home'])
      }
      else if(validLogin.userTypes=="MERCHANT")
      {
        this._router.navigate(['/merchant'])
      }
    

      }
    )
  }
}
