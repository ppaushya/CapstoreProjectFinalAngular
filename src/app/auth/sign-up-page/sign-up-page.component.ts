import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { Address } from '../../models/address';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  
  customer:Customer=new Customer();
  confirmPassword:string="";

  constructor() { 
    this.customer.address=new Address();

  }

  ngOnInit() {
  }

}
