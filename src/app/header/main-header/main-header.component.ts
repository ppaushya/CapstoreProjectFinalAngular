import { Component, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { Product } from '../../data/meta';
import { ProductService } from './main-header.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../servicelayer/cart/cart.service';
import { Cart } from '../../pojo/cart';
import { SignInPageService } from '../../auth/sign-in-page/sign-in-page.service';

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

  _listFilter:string;
  products: Product[]=[]
  

  constructor(public el: ElementRef,private _productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private signinservice: SignInPageService) {
  }

  ngOnInit() {
    this.menuAnchor = this.el.nativeElement;
    this.products= this._productService.getProducts();
    
    this.cartService.cartcount().subscribe(cart1=>this.countincart=cart1);

  
  }



  get listFilter() :string {
    return this._listFilter;
  }
    set listFilter(value:string) {
         this._listFilter=value;

            this._productService.performFilter(this.listFilter);

}

login():boolean{

  console.log(this.isLoggedIn);
  console.log("loginpage")
  return this.signinservice.getauthenticate();

}

logout()
{
  console.log("logout");
  this.isLoggedIn=false;
  window.location.reload();
  
}








}



