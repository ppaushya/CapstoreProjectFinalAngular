import { Component, OnInit } from '@angular/core';
import { Product } from '../pojo/product';
import { AppService } from '../app.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

// wish:IWishlist[]=[];
products:Product[];
emailId:string="virat@gmail.com";

  constructor(private wish_service:AppService) { }

  ngOnInit() {
    //this.wish_service.setEmailID(this.emailId);
    this.wish_service.getWishlist().subscribe(products=>this.products=products);

    
  }


  addToCart(productId:number){

    //this.wish_service.addToCart(productId).subscribe();

  }

  remove(productId:number){
    this.wish_service.remove(productId).subscribe(
      products=>this.products=products
    );
  }

 
}
