import { Component, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../../pojo/cart';
import { Product } from '../../pojo/product';
import { Wishlist } from '../../pojo/wishlist';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit{

  displayMenu = false;

  menuAnchor: any;
  
  countincart:Cart[];
  isLoggedIn:boolean=true;
  wishlistcart:Wishlist[];

  _listFilter:string;
  products: Product[]=[]
  

  constructor(public el: ElementRef,private appService: AppService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.menuAnchor = this.el.nativeElement;
    
    this.appService.cartcount().subscribe(cart1=>this.countincart=cart1);
    this.appService.wishlistcount().subscribe(cart1=>this.wishlistcart=cart1);

  
  }


}



