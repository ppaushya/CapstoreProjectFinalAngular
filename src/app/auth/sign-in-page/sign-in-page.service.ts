import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../../models/login';
import { Observable } from 'rxjs';


const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
  }


@Injectable({
  providedIn: 'root'
})
export class SignInPageService {



  userauthenticate:boolean=false;

  private loginUrl:string="http://10.138.150.215:8083/capstore/api/v1";
  constructor(private _http:HttpClient) {}

  validateEmail(login:Login):Observable<Login>
  {
    return this._http.post<Login>(this.loginUrl+'/login',login)
  }

  setauthenticate(str)
  {
    console.log("userinauthenticate")
    this.userauthenticate=str;
    console.log(this.userauthenticate);
  }

  getauthenticate():boolean{
    console.log("useringetauthenticatemanner")
    return this.userauthenticate;
  }



}

