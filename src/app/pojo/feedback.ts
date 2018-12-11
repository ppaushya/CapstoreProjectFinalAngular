import { Customer } from "./customer";
import { Product } from "./product";
import { Merchant } from "./merchant";

export class FeedBack{
    feedbackId:number;
    customer:Customer;
    product:Product;
    ratingProduct:number;
    ratingMerchant:number;
    comment:string;
    merchant:Merchant;
}