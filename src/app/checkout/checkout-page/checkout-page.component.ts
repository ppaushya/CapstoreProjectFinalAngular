import { Component, OnInit } from "@angular/core";
import { Address } from "../../pojo/address";
import { Cart } from "../../pojo/cart";
import { AppService } from "../../app.service";


@Component({

    selector: 'ship-root',
    templateUrl: './checkout-page.component.html',
    styleUrls: ['./checkout-page.component.scss']

})
export class ShipmentComponent implements OnInit {


    address: Address = new Address();

    cart: Cart = new Cart();
    ngOnInit() {
        console.log("hghgg")
       // this.shipmentservice.getAllAddress().subscribe(AllAddress => this.allAddress = AllAddress)
      

    }
    allAddress: Address[] = [];

    constructor(private shipmentservice: AppService) {


    }

  


    addAddress() {

        //this.shipmentservice.createaddress(this.address).subscribe(res=>console.log(res));
        //window.location.reload();

    }

}





