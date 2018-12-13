import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../pojo/product';
import { ProductImage } from '../../pojo/productimage';
import { AppService } from '../../app.service';
import { CartProduct } from '../../pojo/cardproduct';
import { FeedBack } from '../../pojo/feedback';


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
  recent: Product[] = [];
  cartProduct: CartProduct = new CartProduct();
  images:ProductImage[];
  sub: any;
  feedbacks:FeedBack[] = [];

  constructor( private route: ActivatedRoute,
    private appService: AppService) {
      this.cartProduct.quantity = 1;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProduct(params.id);
     this.getImages(params.id);  
     
     this.addViewCount(params.id);
  });
 
  }


    getImages(productId){
      this.appService.getImages(productId).subscribe(imgs=>this.images=imgs);
      } 


    getSimilarProducts(brand,productCategory){
    this.appService.getSimilarProducts(brand,productCategory).subscribe(pros=>this.recent=pros);
      this.appService.getSimilarProducts(brand,productCategory).subscribe(pros=>{this.recent=pros;
      });
    }


    getProduct(id:number){
      this.appService.getProduct(id).subscribe(product=>{
        this.product=product;
      this.cartProduct.product = this.product;
      this.cartProduct.customer = this.appService.getCustomer();
      this.getSimilarProducts(this.product.brand,this.product.productCategory);
      this.getProductRating(id);
      this.getfeedback();
      });
          
    }


    getProductRating(product_Id:number){
      this.appService.getProductRating(product_Id).subscribe(rating=>{this.productRating=rating;});
    }

    addToCart(){
      console.log("cartProduct");
      console.log(this.cartProduct);
      this.appService.addToCart(this.cartProduct).subscribe(
        cartProducts => {
          console.log("cartProducts");
          console.log(cartProducts);
          
        }
      );
    }

    addViewCount(productId)
    {
      this.appService.addViewCount(productId);
    }

    addToWishlist(){
      console.log("Wishlist")
      this.appService.addWishlist(this.product.productId).subscribe(
        success => {
          console.log("cartProducts");
          console.log(success);
        }
      );;

    }

    getfeedback():void{
      this.appService.getAllfeedbacks(this.product.productId)
      .subscribe(feeds=>{this.feedbacks=feeds;});
      
      }
}
