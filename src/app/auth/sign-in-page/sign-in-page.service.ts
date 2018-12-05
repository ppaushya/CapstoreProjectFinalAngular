import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInPageService {

  loginUrl:string="";
  constructor(private _http:HttpClient) {}

  validateEmail(login:Login):Observable<Login>
  {
    return this._http.post<Login>(this.loginUrl,login)
  }
}
