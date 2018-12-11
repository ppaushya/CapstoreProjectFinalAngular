import { Address } from "../models/address";

export class Merchant{

    merchantId:number;
    merchantName:string;
    emailId:string;
    merchantContact:string;
    merchantAddress:Address;
    isVerified:boolean
    }