import { Component, OnInit } from "@angular/core";
import { Address } from "../../pojo/address";
import { Cart } from "../../pojo/cart";
import { ShipmentService } from "../../servicelayer/shipment/shipment.service";


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
        this.shipmentservice.getAllAddress().subscribe(AllAddress => this.allAddress = AllAddress)
        this.shipmentservice.getCart().subscribe(
            cart => {
                this.cart = cart;
                console.log(cart);
            })

    }
    allAddress: Address[] = [];

    constructor(private shipmentservice: ShipmentService) {


    }

    isClicked: Boolean = false;

    click1() {
        console.log(this.isClicked);
        this.isClicked = !this.isClicked
    }


    addAddress() {

        console.log("addaddress")
        this.shipmentservice.createaddress(this.address).subscribe()
        console.log("added")

    }

}





