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
     private _shipmentUrl = "http://localhost:8086/capstore/api/v1/address/";
     private _cartUrl = "http://localhost:8086/capstore/api/v1/getCartProducts";
  
     constructor(private _http: HttpClient){
  
     }
     getAllAddress(): Observable<Address[]>{
         console.log("Service")
        return this._http.get<Address[]>(this._shipmentUrl+this.email);
       
    }

     getCart(): Observable<Cart>{
         console.log("Service")
        return this._http.get<Cart>(this._cartUrl+"/"+'701');
       
    }
 
 
  createaddress(address:Address):Observable<Address[]>
    {
      console.log("sdkhfh");
        return  this._http.post<Address[]>(this._shipmentUrl+this.email,address,{}) 

}


  }