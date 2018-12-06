import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Product } from '../../data/meta';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Subject } from "rxjs/Subject";
import { DataService } from "../../data/data.service";
@Injectable()
export class ProductService {

  private filterBy:string;
  private subject = new Subject<any>();
 
//private _productUrl= './api/products/products.json';

constructor(private _http:HttpClient, private data: DataService){}
// getProducts(): Observable<IProduct[]>{
//     return this._http.get<IProduct[]>(this._productUrl)
//         .do(data=>console.log('All: '+JSON.stringify(data)))
//         .catch(this.handleError); 
// }
// private handleError(err: HttpErrorResponse){
//     console.error(err.message);
//     return Observable.throw(err.message);
// }

performFilter(filterby: string): void {
  //console.log("Service reached");
  this.subject.next({ text: filterby });
  //console.log(this.filterBy);
}

getPerformFilter():Observable<any>{
  // console.log("Service Getter");
  // console.log(this.filteredProducts);
  // return this.filteredProducts.asObservable();

  return this.subject.asObservable();
  
}

 getProducts(): Product[]
{
  
 return  this.data.products;

 
}
} 
