import { Invoice } from "./invoice";

export class Transaction{
    transactionId: number;
  invoice:Invoice;
  modeOfPayment:string;
  paymentModeNumber:number;
  status:string;
} 