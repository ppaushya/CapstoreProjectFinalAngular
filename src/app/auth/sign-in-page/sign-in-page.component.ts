import { Component, OnInit, Input } from '@angular/core';
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
  message:string;
 
  validEmail:boolean=false;

  @Input() invalid:boolean;
  constructor(private _service:SignInPageService, private _router:Router) { }

  ngOnInit() {

    
  }

  validateLogin()
  {
    this._service.validateEmail(this.login).subscribe(
      validLogin=>{
        this.login=validLogin;
      if(validLogin.userTypes=="CUSTOMER")
      {
        this._router.navigate(['/home'])
        this.invalid=true;
        this._service.setauthenticate(true);
      }
      else if(validLogin==null)
      {
        this._router.navigate(['/sign-in']);
        this.invalid=true;
        this.message="Invalid EmailId or Password";

      }
    
      }
    )
  }
}
