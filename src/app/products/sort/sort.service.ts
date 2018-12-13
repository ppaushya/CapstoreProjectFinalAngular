import { Injectable } from "@angular/core";  
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ListPageComponent } from "../list-page/list-page.component";
import { Product } from "../../pojo/product";


    const httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
    }

    @Injectable()
    export class SortService {
    selectedOption:string;
    productCategory:string;
    private product:Product;
    sortedProducts:Product[];
    constructor(private http:HttpClient) { }
    set_sort_option(selectedoption){
    this.selectedOption=selectedoption;
    }
    get_sort_option():string{
        return this.selectedOption;
    }
    setCategory(category){
        this.productCategory=category;
    }
    getCategory():string{
        return this.productCategory;
    }
    private sortUrl="http://10.138.150.215:8083/capstore/api/v1";

    getAscProducts(category):Observable<Product[]>{
         return this.http.get<Product[]>(this.sortUrl+'/'+category+"/"+"lowtohigh");
    }

    getDscProducts(category):Observable<Product[]>{
        return this.http.get<Product[]>(this.sortUrl+'/'+category+"/"+"hightolow");
    }
    set_sorted_products(sortedProducts){
        this.sortedProducts=sortedProducts;
    }
    get_sorted_products(){
        return this.sortedProducts;
    }
    getMostViewed(category):Observable<Product[]>{
        return this.http.get<Product[]>(this.sortUrl+'/'+category+"/"+"mostViewed");
    }
    getbestSellers(category):Observable<Product[]>{
        return this.http.get<Product[]>(this.sortUrl+'/'+category+"/"+"BestSeller");
    }
    getProductRating(productId:number):any{    
        return this.http.get<any>(this.sortUrl+'/getProductRating/'+productId);
    } 

    inRange(category,min,max):Observable<Product[]>{
        return this.http.get<Product[]>(this.sortUrl+'/'+category +'/'+ min+'/'+max);
    }

}  
 
