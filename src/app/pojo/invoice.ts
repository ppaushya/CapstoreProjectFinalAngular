import { Coupon } from "./coupon";
import { ProductOrder } from "./order";
 
export class Invoice{

	invoiceNo:number;
	order:ProductOrder;
	InvoiceDate:string;
	discountedPrice:number;
	discount:number;
	coupon:Coupon;
} 
 
