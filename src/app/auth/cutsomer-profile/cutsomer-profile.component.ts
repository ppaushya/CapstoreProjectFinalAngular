import { Component, OnInit } from '@angular/core';
import { Customer } from '../../pojo/customer';

import { Address } from '../../pojo/address';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-cutsomer-profile',
  templateUrl: './cutsomer-profile.component.html',
  styleUrls: ['./cutsomer-profile.component.scss']
})
export class CutsomerProfileComponent implements OnInit {

  
  customer : Customer=new Customer()
 addresses: Address[];

  constructor(private service: AppService) { }

  ngOnInit() {

    this.getCustomer();
    this.getAddresses();
  }


  getCustomer(): void{
  
    this.service.getCustomer1().subscribe(customer => { this.customer= customer;
    
    });
    
    }


    getAddresses(): void{
  
      this.service.getAddresses()

      
      .subscribe(addresses => { this.addresses= addresses;});
      
      }

      updateAddress(address:Address)
      {
        console.log(address);
        this.service.updateAddress(address);
      }



}
