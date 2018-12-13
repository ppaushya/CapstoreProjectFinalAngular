import { Address } from "../models/address";

export class Merchant{

    merchantId:number;
    merchantName:string;
    emailId:string;
    merchantPassword:string
    merchantContact:string;
    merchantAddress:Address;
    isVerified:boolean
    }