import { ProductOrder } from "./order";
import { Address } from "./address";
import { Product } from "../data/meta";


export class IShipment{

    shipmentId:number;
    order:ProductOrder;
    address:Address;
    product:Product;
    deliveryStatus:String;
    deliveryDate:string;
    dispatchDate:string;
    
    }