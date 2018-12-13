import { Component, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../servicelayer/cart/cart.service';
import { Cart } from '../../pojo/cart';
import { SignInPageService } from '../../auth/sign-in-page/sign-in-page.service';
import { Product } from '../../pojo/product';
import { ProductService } from '../../servicelayer/product/product.service';
import { Wishlist } from '../../pojo/wishlist';
import { WishlistService } from '../../servicelayer/wishlist/wishlist.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit{
 // inputModel: any;

  displayMenu = false;

  menuAnchor: any;
  
  countincart:Cart[];
  isLoggedIn:boolean=true;
  wishlistcart:Wishlist[];

  _listFilter:string;
  products: Product[]=[]
  

  constructor(public el: ElementRef,private _productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private signinservice: SignInPageService,
    private wishlistservice: WishlistService) {
  }

  ngOnInit() {
    this.menuAnchor = this.el.nativeElement;
    
    this.cartService.cartcount().subscribe(cart1=>this.countincart=cart1);
    this.wishlistservice.wishlistcount().subscribe(cart1=>this.wishlistcart=cart1);

  
  }



login():boolean{

  return this.signinservice.getauthenticate();

}

logout()
{
  this.isLoggedIn=false;
  window.location.reload();
  
}








}



