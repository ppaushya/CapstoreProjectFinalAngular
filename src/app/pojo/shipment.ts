import { ProductOrder } from "./order";
import { Address } from "./address";
import { Product } from "./product";


export class IShipment{

    shipmentId:number;
    order:ProductOrder;
    address:Address;
    product:Product;
    deliveryStatus:String;
    deliveryDate:string;
    dispatchDate:string;
    
    }