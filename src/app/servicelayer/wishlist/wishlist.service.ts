import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Cart } from '../../pojo/cart';
import { Observable } from 'rxjs';
import { Wishlist } from '../../pojo/wishlist';


const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
  } 
@Injectable({
  providedIn: 'root'
})
export class WishlistService {


  cart:Cart[];

  constructor(private http:HttpClient) { }
  private sortUrl="http://10.138.150.215:8083/capstore/api/v1";

  wishlistcount():Observable<Wishlist[]>{

    return this.http.get<Wishlist[]>(this.sortUrl+'/wishlistcount');
    
    
    }
}
