import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Product } from '../../pojo/product';
import { Observable } from 'rxjs';
import { ProductImage } from '../../pojo/productimage';


const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
  }

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  private productUrl="http://10.138.150.215:8083/capstore/api/v1";

  
  getproductswithcategory(category):Observable<Product[]>{
  
  return  this._http.get<Product[]>(this.productUrl+'/'+category);
 
  
 }
 getImages(productId):Observable<ProductImage[]>{
  return this._http.get<ProductImage[]>(this.productUrl+'/images'+"/"+104);
  } 
}
