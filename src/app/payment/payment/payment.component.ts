import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Card } from '../../pojo/card';
import { BankAccount } from '../../pojo/bankaccount';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  card: Card = new Card();
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

  constructor(private appService:AppService) { }

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

  payAmount(){
    switch(this.paymentType){
      case 1:
      console.log(this.appService.getProductOrder());
      console.log(this.card);
      this.appService.payByCard(this.card,this.appService.getProductOrder().orderId).subscribe(
        invoice => {
          console.log(invoice);
        }
      );
        break;
      case 2:
      console.log(this.appService.getProductOrder());
      //this.appService.getBankAccountFromCredential()
      this.appService.payByBankAccount(this.account,this.appService.getProductOrder().orderId).subscribe(
        invoice => {
          console.log(invoice);
        }
      );
        break;
      case 3:
      console.log(this.appService.getProductOrder());
      this.appService.payByCash(this.appService.getProductOrder().orderId).subscribe(
        invoice => {
          console.log(invoice);
        }
      );
        break;
    }
  }
}
