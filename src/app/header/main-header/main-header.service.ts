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
 


constructor(private _http:HttpClient, private data: DataService){}


performFilter(filterby: string): void {
  this.subject.next({ text: filterby });
}

getPerformFilter():Observable<any>{

  return this.subject.asObservable();
  
}

 getProducts(): Product[]
{
  
 return  this.data.products;

 
}
} 
