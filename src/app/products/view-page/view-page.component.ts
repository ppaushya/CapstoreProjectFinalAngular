import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../pojo/product';
import { ProductImage } from '../../pojo/productimage';
import { ProductService } from '../../servicelayer/product/product.service';
import { Inventory } from '../../pojo/inventory';
import { Promo } from '../../pojo/promo';
import { Observable } from 'rxjs';
import { SortService } from '../sort/sort.service';


@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss'],
})
export class ViewPageComponent implements OnInit {
  color: any;
  productRating: number;
  size: any;

   product: Product=new Product();
  recent: Product[] = [
    
  ];
  images:ProductImage[];
  sub: any;

  constructor( private route: ActivatedRoute,private productService:ProductService,private sortService:SortService
              ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProduct(params.id);
      this.getImages(params.id);
     
      
  });
 
  }
  getImages(productId){
    this.productService.getImages(productId).subscribe(imgs=>this.images=imgs);
    } 
  getSimilarProducts(brand,productCategory){
    this.productService.getSimilarProducts(brand,productCategory).subscribe(pros=>{
      this.recent=pros;
    });
  }
  getProduct(id:number){
    this.productService.getProduct(id).subscribe(product=>{
      this.product=product;
    this.getSimilarProducts(this.product.brand,this.product.productCategory);
    this.getProductRating(id);
    });
        
  }
  getProductRating(product_Id:number){
  
     this.sortService.getProductRating(product_Id).subscribe(rating=>{this.productRating=rating;});
    }
}
