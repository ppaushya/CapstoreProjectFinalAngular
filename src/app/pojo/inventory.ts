import { Merchant } from "./merchant";
import { Promo } from "./promo";


export class Inventory{

    inventoryId:number;
     merchant:Merchant;
    productName:string;
    productCategory:string;
    productPrice:number;
    productDescription:string;
    productBrand:string;
    promo:Promo;
    status:string
    inventoryType:string
    inventoryQuantity:number
    imageUrl:string
    }