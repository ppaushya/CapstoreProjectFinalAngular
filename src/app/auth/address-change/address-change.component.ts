import { Component, OnInit } from '@angular/core';
import { Address } from '../../pojo/address';
//import { AddressChangeService } from '../../address-change.service';

import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-address-change',
  templateUrl: './address-change.component.html',
  styleUrls: ['./address-change.component.scss']
})
export class AddressChangeComponent implements OnInit {


  
  address:Address;
  
  constructor(private addressService: AppService, private router:Router) { }

  ngOnInit() {
     this.address=this.addressService.getAddress();
     console.log(this.address);
  }


  updateaddress() : void{
    this.addressService.updateadd(this.address).subscribe(addr=>
      {
        
        this.router.navigate(['/auth/view-profile']);
      });

  
  }



  


}
