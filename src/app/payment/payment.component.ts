import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CreditDebitCard } from './credit-debit-card';
import { BankAccount } from './bank-account';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component2.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  card: CreditDebitCard = new CreditDebitCard();
  account: BankAccount = new BankAccount();

  cardNumber: string = "";
  // cardNumber1: string = "";
  // cardNumber2: string = "";
  // cardNumber3: string = "";
  // cardNumber4: string = "";
  // @ViewChild("cardNumber1Control") cardNumber1ControlView: ElementRef;
  // @ViewChild("cardNumber2Control") cardNumber2ControlView: ElementRef;
  // @ViewChild("cardNumber3Control") cardNumber3ControlView: ElementRef;
  // @ViewChild("cardNumber4Control") cardNumber4ControlView: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // navigateToAnotherCardNumberField(current: number): void {
  //   console.log("ch "+current);
  //   switch (current) {
  //     case 1:
  //       this.cardNumber2ControlView.nativeElement.focus();
  //       break;

  //     case 2:
  //       this.cardNumber3ControlView.nativeElement.focus();
  //       break;

  //     case 3:
  //       this.cardNumber4ControlView.nativeElement.focus();
  //       break;

  //     case 4:
  //       //this.cardNumber4ControlView.nativeElement.focus();
  //       break;
  //   }
  // }

  
  paymentType: number = 1;

  setPaymentMethod(type:number): void{
    this.paymentType = type;
  }
}
