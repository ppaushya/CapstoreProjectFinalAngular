import { Component, OnInit, Input} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from "@angular/core";
import { Observable } from 'rxjs';
import { Product } from '../../pojo/product';
import { Inventory } from '../../pojo/inventory';
import { Promo } from '../../pojo/promo';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})



export class ListPageComponent implements OnInit {
  products: Product[];
  category: string;
  filteredProducts : Product[];
  sortedproducts:Product[];
  sortOption:string;
  sortBy:string='price';
  min:number;
  max:number;
  product: Product[]=[];
  range:Range[]=[{
  "min":0,
  "max":0
  }];


 

  constructor(
              private route: ActivatedRoute, 
              private appService: AppService) 
              {
               
              }

    ngOnInit() 
    {
        this.route.queryParams.subscribe(params => { this.category = params['category'];});
          this.applyFilter(this.category);  
    }
 
 
   
 
    
    private applyFilter(category) {
    this.appService.getproductswithcategory(this.category).subscribe(Allproducts=>{this.products=Allproducts});
  
    }


      lowtohigh():void{
          this.sortBy="lowtohigh";
          this.appService.set_sort_option(this.sortBy);
          this.appService.getAscProducts(this.category).subscribe(Allproducts=>{this.products=Allproducts});
        
      }
      hightolow():void{
          this.sortBy="hightolow";
          this.appService.set_sort_option(this.sortBy);
          this.appService.getDscProducts(this.category).subscribe(Allproducts=>{this.products=Allproducts});
        
      }
      mostViewed():void{
          this.sortBy="mostViewed";
          this.appService.set_sort_option(this.sortBy);
          this.appService.getMostViewed(this.category).subscribe(product=>this.products=product);
          
      }
      bestSellers():void{
          this.sortBy="bestSellers";
          this.appService.set_sort_option(this.sortBy);
          this.appService.getbestSellers(this.category).subscribe(product=>this.products=product);
          
      }

      inRange(range:Range):void{
          this.appService.inRange(this.category,range.min,range.max).subscribe(product=>this.products=product);
          
      }




    }
      
    
      export interface Range {
        min:number;
        max:number;
        }     
  
