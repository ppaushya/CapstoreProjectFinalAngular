import { Address } from "./address";


export class Customer{
    customerId:number;
    firstName:string;
    lastName:string;
    mobileNumber:string;
    emailId :string;
    addresses:Address[];
    isVerified:boolean;
    
    }