import { Component, OnInit } from '@angular/core';
import { Product } from '../../pojo/product';
import { Cart } from '../../pojo/cart';
import { CartProduct } from '../../pojo/cardproduct';
import { Observable } from 'rxjs';
import { AppService } from '../../app.service';
import { ProductOrder } from '../../pojo/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bag-page',
  templateUrl: './bag-page.component.html',
  styleUrls: ['./bag-page.component.scss']
})
export class BagPageComponent implements OnInit {

  // products:Product[]=[];
  cart:Cart=new Cart();
  cartProducts: CartProduct[]=[];
  //quantity:number=0;;
  shippingCharge:number=0;
  cartMinimumAmount:number=100;
  fileUploads: Observable<string[]>;
  custId:number=701;
  
  order: ProductOrder = new ProductOrder();
  isAllProductAvailable: boolean = false;
  showUnavailableMessage: boolean = false;

  constructor(private appService: AppService,private router:Router) {
    
   }

  ngOnInit() {
    this.appService.getAllCart(this.custId).subscribe(
        cartProducts=> this.cartProducts=cartProducts
        
        );
        
       this.getImage(1101);
      
  }
  getImage(productId:number)
  {
    // console.log(productId)
    // this.fileUploads = this.appService.getFiles(productId);
    // console.log(  this.fileUploads )
  }
  updateQuantity(cartProduct:CartProduct):void{
   this.appService.updateQuantity(cartProduct).subscribe();
  }
  deleteProduct(productId:number):void{
   // alert("Are you Sure you want to delete");
    this.appService.deleteProduct(productId).subscribe(
      cartProducts => {
        this.cartProducts = cartProducts;
      }
    );
  }

  totalCounts(data) {
    let total = 0;

    data.forEach((d) => {
      total += (parseInt(d.product.productPrice, 10)*parseInt(d.quantity, 10));
    });
    if(total>this.cartMinimumAmount)
      {
        this.shippingCharge=0;
        return total+this.shippingCharge;
      }
        else if(total<this.cartMinimumAmount && total>25)  {
           this.shippingCharge=25;
          return total+this.shippingCharge;
        }
        else if(total=25)
            return 0;
  }

  checkAvailability(){
    this.order.customer = this.appService.getCustomer();
    this.cart.cartProducts = this.cartProducts;
    this.order.cart = this.cart;
    console.log(this.order);
    this.appService.checkAvailability(this.order).subscribe(
      available => {
        this.isAllProductAvailable = available;
        if(available){
          console.log(available);
          this.appService.setProductOrder(this.order);
          this.router.navigate(['/checkout']);
        }else{
          this.showUnavailableMessage = true;
        }
      }
    );
  }
}
