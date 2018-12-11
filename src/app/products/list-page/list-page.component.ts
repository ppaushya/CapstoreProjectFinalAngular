import { Component, OnInit, Input} from '@angular/core';
import { DataService } from '../../data/data.service';
import { Product } from '../../data/meta';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../header/main-header/main-header.service';
import { SortService } from '../sort/sort.service';
import { Pipe, PipeTransform } from "@angular/core";
import { MyProduct } from '../../data/product';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})



export class ListPageComponent implements OnInit {
  products: Product[];
  category: string;
  filteredProducts : Product[];
  searchedProducts : Product[];
  searchTerm: string;
  sortOption:string;
  sortBy:string='price';
  sortByType:number=0;
  sortByOptions = [
    'price',
    'price',
    'sale',
    'views',
];

min:number;
max:number;
range:Range[]=[{
"min":0,
"max":0
}];
sortedproducts:MyProduct[]=[
{
"productId": 0,
"productName": "",
"inventoryId": 0,
"productPrice": 0,
"merchantId": 0,
"productsSold": 0,
"productView": 0,
"productDescription": "",
"quantity": 0,
"discount": 0,
"brand": "",
"string": ""
}
] ; 
 

  constructor(private data: DataService,private sortService:SortService,
          private route: ActivatedRoute,
          private _productService: ProductService) {
            this.products= this._productService.getProducts();
            this.searchedProducts =this.products;
            this._productService.getPerformFilter().subscribe(
              serach => {
                this.searchTerm = serach['text'];
                this.searchedProducts =this.searchTerm ? this.performFilter(this.searchTerm):this.products;
  }
            );}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
              this.category = params['category'];
            });
    this.products = this.data.products;
    this.applyFilter();  
  }

  doSort($event){
    console.log($event);
    this.sortByType = $event;
    this.sortBy = this.sortByOptions[this.sortByType];
    console.log("sort by "+this.sortBy);
  }

  private applyFilter() {
    //this.sortOption=this.sortService.get_sort_option();
    console.log(this.sortOption);
    this.filteredProducts = !this.category? this.products
    : this.products.filter(e => e.category === this.category); 
  }


  performFilter(filterBy:string):any []{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:Product)=>
     product.title.toLocaleLowerCase().indexOf(filterBy)!==-1 ||product.description.toLocaleLowerCase().indexOf(filterBy)!==-1 ||product.category.toLocaleLowerCase().indexOf(filterBy)!==-1);
  

   
   
      }
 
      lowtohigh():void{
      this.sortBy="lowtohigh";
      this.sortService.set_sort_option(this.sortBy);
      this.sortService.getAscProducts(this.category).subscribe(Allproducts=>{this.sortedproducts=Allproducts});
     
      }
      hightolow():void{
      this.sortBy="hightolow";
      this.sortService.set_sort_option(this.sortBy);
      this.sortService.getDscProducts(this.category).subscribe(Allproducts=>{this.sortedproducts=Allproducts});
     
      }
      mostViewed():void{
      this.sortBy="mostViewed";
      this.sortService.set_sort_option(this.sortBy);
      this.sortService.getMostViewed(this.category).subscribe(product=>this.sortedproducts=product);
      
      }
      bestSellers():void{
      this.sortBy="bestSellers";
      this.sortService.set_sort_option(this.sortBy);
      this.sortService.getbestSellers(this.category).subscribe(product=>this.sortedproducts=product);
      
      }

      inRange(range:Range):void{
      this.sortService.inRange(this.category,range.min,range.max).subscribe(product=>this.sortedproducts=product);
      
      }
    }
      
    
      export interface Range {
        min:number;
        max:number;
        }     
  
