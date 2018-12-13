import { Component, OnInit } from "@angular/core";
import { Address } from "../../pojo/address";
import { Cart } from "../../pojo/cart";
import { AppService } from "../../app.service";
import { ProductOrder } from "../../pojo/order";
import { Router } from "@angular/router";


@Component({

    selector: 'ship-root',
    templateUrl: './checkout-page.component.html',
    styleUrls: ['./checkout-page.component.scss']

})
export class ShipmentComponent implements OnInit {


    address: Address = new Address();

    cart: Cart = new Cart();
    order:ProductOrder = new ProductOrder();

    ngOnInit() {
        console.log("hghgg")
       this.appService.getAllAddress().subscribe(AllAddress => this.allAddress = AllAddress)
      this.order = this.appService.getProductOrder();
      this.getCart();
      console.log(this.order);

    }
    allAddress: Address[] = [];

    constructor(private appService: AppService,private router:Router) {


    }

  


    addAddress() {

        this.appService.createaddress(this.address).subscribe(res=>console.log(res));
        window.location.reload();

    }

    getCart(){
        this.appService.getCart().subscribe(
            cart => {
                this.cart = cart;
                this.order.cart = cart;
                console.log(cart);
            }
        );
    }

    placeOrder(){
        this.appService.placeOrder(this.order).subscribe(
            newOrder => {
                console.log(newOrder);
                this.appService.setProductOrder(newOrder);
             this.router.navigate(['/payment']);
            }
        );
    }
}





