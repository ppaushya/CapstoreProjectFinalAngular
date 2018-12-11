import { Injectable } from "@angular/core";  
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../../data/meta";
import { ListPageComponent } from "../list-page/list-page.component";
import { MyProduct } from "../../data/product";


const httpOptions={
headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable()
export class SortService {
selectedOption:string;
productCategory:string;
private product:Product;
sortedProducts:MyProduct[];
constructor(private http:HttpClient) { }
set_sort_option(selectedoption){
// console.log(selectedoption+"set");
this.selectedOption=selectedoption;
//this.listPage.setsortoption(selectedoption);
}
get_sort_option():string{
// console.log(this.selectedOption+"get");
return this.selectedOption;
}
setCategory(category){
this.productCategory=category;
}
getCategory():string{
return this.productCategory;
}
private sortUrl="http://10.138.150.215:8086/capstore/api/v1";

getAscProducts(category):Observable<MyProduct[]>{

console.log("Iamheere");
return this.http.get<MyProduct[]>(this.sortUrl+'/Books'+"/"+"lowtohigh").do(data=>console.log('All :' + JSON.stringify(data)));


}

getDscProducts(category):Observable<MyProduct[]>{


return this.http.get<MyProduct[]>(this.sortUrl+'/Books'+"/"+"hightolow");

}
set_sorted_products(sortedProducts){
this.sortedProducts=sortedProducts;
}
get_sorted_products(){
return this.sortedProducts;
}




getMostViewed(category):Observable<MyProduct[]>{

return this.http.get<MyProduct[]>(this.sortUrl+'/'+'Clothing'+"/"+"mostViewed");

}
getbestSellers(category):Observable<MyProduct[]>{

return this.http.get<MyProduct[]>(this.sortUrl+'/'+'Clothing'+"/"+"BestSeller");
}

inRange(category,min,max):Observable<MyProduct[]>{

return this.http.get<MyProduct[]>(this.sortUrl+'/'+'Clothing' +'/'+ min+'/'+max);

}

}  
 
