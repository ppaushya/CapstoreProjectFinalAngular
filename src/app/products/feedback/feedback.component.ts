import { Component, OnInit, Output, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from '../../pojo/product';
import { FeedBack } from '../../pojo/feedback';
import { Customer } from '../../pojo/customer';
import { Merchant } from '../../pojo/merchant';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
 
@Input() product:Product;

feedbacks:FeedBack[]=[{
  "feedbackId":5,
  "customer":new Customer,
  "product":new Product,
  "ratingProduct":4.5,
  "ratingMerchant":5,
  "comment":"Good",
  "merchant": new Merchant,
},
{
  "feedbackId":6,
  "customer":new Customer,
  "product":new Product,
  "ratingProduct":5,
  "ratingMerchant":4.5,
  "comment":"Excellent",
  "merchant": new Merchant,
}];

  constructor(private productService:AppService) { }

  ngOnInit() {
    this.getfeedback();
  }

getfeedback():void{
this.productService.getAllfeedbacks(this.product.productId)
.subscribe(feeds=>{this.feedbacks=feeds;});

}
}
