import { Component, OnInit } from '@angular/core';


import {Md5} from 'ts-md5'; 

import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AppService } from '../../app.service';



@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent  {

  
  currentPassword:string
  newPassword:string
  confirmPassword:string
  message:string;
  constructor(private service:AppService, private _router:Router) { }

 
  submit1(){
  
if(this.confirmPassword==this.newPassword){
  const md5 = new Md5();
    this.currentPassword=md5.appendStr(this.currentPassword).end().toString();
    console.log(this.currentPassword);

  this.service.comparepassword(this.currentPassword).subscribe(flag=>{
    if(flag){
      const md5 = new Md5();
    this.newPassword=md5.appendStr(this.newPassword).end().toString();
    console.log(this.newPassword);
      this.service.changepassword(this.newPassword).subscribe(flag2=>{
        if(flag2){
          alert("Your Password has been changed successfully");
          this._router.navigate(['/home']);

        }
      })
    }
    else{
      alert("current password doesnt match")
    }
  })

}else{
 
  this.confirmPassword=null
   this.message="       *Passwords do not match"
}

  }

}
