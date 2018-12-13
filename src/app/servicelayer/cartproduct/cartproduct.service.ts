import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartProduct } from '../../pojo/cardproduct';


const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
  }
@Injectable({
  providedIn: 'root'
})
export class CartproductService {
  private sortUrl="http://10.138.150.215:8083/capstore/api/v1";

  constructor(private http:HttpClient) { }

  addToCart(product):Observable<CartProduct[]>{
    return this.http.post<CartProduct[]>(this.sortUrl+'/cartadd',product);
  }
}
