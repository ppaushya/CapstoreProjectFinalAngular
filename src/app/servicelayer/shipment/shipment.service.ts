import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Address } from "../../pojo/address";
import { Cart } from "../../pojo/cart";




@Injectable({
    providedIn: 'root'
  })
  export class ShipmentService {
  
    email :string="virat@gmail.com";
    
     //private _accountsUrl = "./api/account/accounts.json";
     private _shipmentUrl = "http://10.138.150.215:8083/capstore/api/v1/address/";
  
     constructor(private _http: HttpClient){
  
     }
     getAllAddress(): Observable<Address[]>{
         console.log("Service")
        return this._http.get<Address[]>(this._shipmentUrl+this.email);
       
    }

    
 
 
  createaddress(address:Address):Observable<Address[]>
    {
      console.log("sdkhfh");
        return  this._http.post<Address[]>(this._shipmentUrl+this.email,address,{}) 
        

}


  }