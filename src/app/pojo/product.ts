import { Inventory } from "./inventory";
import { Promo } from "./promo";

export class Product{

    productId:number;
    productName:string;
    productCategory:string;
    inventory:Inventory;
    productPrice:number;
    promo:Promo;
    productsSold:number
    productView:number;
   
    productDescription:string;
    quantity:number;
    discount:number;
    brand:string;
    imageUrl:string;
    promotionMessageSent:boolean;
    }