import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './pojo/product';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Cart } from './pojo/cart';
import { CartProduct } from './pojo/cardproduct';
import { copyStyles } from '@angular/animations/browser/src/util';

const headers= new HttpHeaders({ 'Content-Type':'application/json'});

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  deleteProduct(productId: number):  Observable<CartProduct[]> {
    return this.http.delete<CartProduct[]>(" http://localhost:8086/capstore/api/v1/deleteProductFromCart/701"+'/'+productId);
  }
  updateQuantity(cartProduct: CartProduct): Observable<CartProduct> {
   return this.http.put<CartProduct>('http://localhost:8086/capstore/api/v1/updateCartProductQuantity/701',cartProduct,{});
  }
  
  url:string="http://localhost:8086/capstore/api/v1";

  constructor(private http: HttpClient) { }

  getAllCart(custId:number): Observable<CartProduct[]> {
    console.log("cartService");
    return this.http.get<CartProduct[]>("http://localhost:8086/capstore/api/v1/getCartProducts/701");
   // (this.url+'/getCartProducts/'+custId);
  }

  getFiles(productId:number): Observable<any> {
    console.log('customerService getFile'+productId);
    return this.http.get<any>('http://localhost:8082/getallfiles/106');
      //'http://localhost:8086/capstore/api/v1/getallfiles/'+1101);
      //
      //
  
  }
}
