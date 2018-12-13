import { Component, OnInit, Input} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SortService } from '../sort/sort.service';
import { Pipe, PipeTransform } from "@angular/core";
import { Observable } from 'rxjs';
import { Product } from '../../pojo/product';
import { Inventory } from '../../pojo/inventory';
import { Promo } from '../../pojo/promo';
import { ProductService } from '../../servicelayer/product/product.service';

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
  product: Product[]=[

    {
      "productId": 103,
      "productName": "Galaxy",
      "productCategory": "electronics",
      "inventory": new Inventory,
      "productPrice": 40000,
      "promo": new Promo,
      "productsSold": 20,
      "productView": 70,
      "productDescription": "Gud",
      "quantity": 100,
      "discount": 1200,
      "brand": "Samsung",
      "imageUrl": "C:UsersshivansDownloadsCheckProductsrcmain\resourcesStaticupload-dir",
      "isPromotionMessageSent": true
  },



    
  ];
  range:Range[]=[{
  "min":0,
  "max":0
  }];


 

  constructor(private sortService:SortService, 
              private route: ActivatedRoute, 
              private productService: ProductService) 
              {
                this.applyFilter(this.category);  
              }

    ngOnInit() 
    {
        this.route.queryParams.subscribe(params => { this.category = params['category'];});
          this.applyFilter(this.category);  
    }
 
 
   
 
    
    private applyFilter(category) {
      console.log(this.category+"Main hoon");

    //   this.filteredProducts = !this.category? this.products
    //   : this.products.filter(e =>{ e.productCategory === this.category;console.log(e.productCategory+"hukkb")}); 
    this.productService.getproductswithcategory(this.category).subscribe(Allproducts=>{this.products=Allproducts});
  
    }


      lowtohigh():void{
          this.sortBy="lowtohigh";
          this.sortService.set_sort_option(this.sortBy);
          this.sortService.getAscProducts(this.category).subscribe(Allproducts=>{this.products=Allproducts});
        
      }
      hightolow():void{
          this.sortBy="hightolow";
          this.sortService.set_sort_option(this.sortBy);
          this.sortService.getDscProducts(this.category).subscribe(Allproducts=>{this.products=Allproducts});
        
      }
      mostViewed():void{
          this.sortBy="mostViewed";
          this.sortService.set_sort_option(this.sortBy);
          this.sortService.getMostViewed(this.category).subscribe(product=>this.products=product);
          
      }
      bestSellers():void{
          this.sortBy="bestSellers";
          this.sortService.set_sort_option(this.sortBy);
          this.sortService.getbestSellers(this.category).subscribe(product=>this.products=product);
          
      }

      inRange(range:Range):void{
          this.sortService.inRange(this.category,range.min,range.max).subscribe(product=>this.products=product);
          
      }




    }
      
    
      export interface Range {
        min:number;
        max:number;
        }     
  
