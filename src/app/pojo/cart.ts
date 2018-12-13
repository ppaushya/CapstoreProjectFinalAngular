import { Customer } from "./customer";
import { CartProduct } from "./cardproduct";


export class Cart{
    cartId: number;
    customer: Customer;
    cartProducts: CartProduct[];
    minimumAmount: number;
    
}