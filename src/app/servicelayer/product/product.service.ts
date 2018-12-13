import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Product } from '../../pojo/product';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/do'; 
import { ProductImage } from '../../pojo/productimage';
import { FeedBack } from '../../pojo/feedback';


const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
  }

@Injectable({
  providedIn: 'root'
})
export class ProductService {
product:Product = new Product;
  constructor(private _http:HttpClient) { }

  private productUrl="http://10.138.150.215:8083/capstore/api/v1";

  
  getproductswithcategory(category):Observable<Product[]>{
  
  return  this._http.get<Product[]>(this.productUrl+'/'+category);
  
 }
 getImages(productId):Observable<ProductImage[]>{
  return this._http.get<ProductImage[]>(this.productUrl+'/images'+"/"+productId);
  } 
  getProduct(productId):Observable<Product>{
    return this._http.get<Product>(this.productUrl+'/product/'+productId)
    .do(data=>console.log('All :' + JSON.stringify(data)));
  }
  getSimilarProducts(brand:string,productCategory:string){
    return this._http.get<Product[]>(this.productUrl+'/similarProduct/'+brand+productCategory);
  }

  getAllfeedbacks(productId):Observable<FeedBack[]>{
    return this._http.get<FeedBack[]>(this.productUrl+'/feedback'+"/"+productId);
  }
}
