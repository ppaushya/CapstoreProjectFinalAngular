import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Login } from '../../pojo/login';

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
  constructor(private _router:Router) { }

  ngOnInit() {
  }
}
