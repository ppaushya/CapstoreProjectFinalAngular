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
    isPromotionMessageSent:boolean;
    productDescription:string;
    quantity:number;
    discount:number;
    brand:string;
    
    }