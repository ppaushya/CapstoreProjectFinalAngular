import { Component, OnInit } from '@angular/core';
import { Customer } from '../../pojo/customer';

import { Router } from '@angular/router';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-mobile-edit',
  templateUrl: './mobile-edit.component.html',
  styleUrls: ['./mobile-edit.component.scss']
})
export class MobileEditComponent implements OnInit {

  
  customer : Customer=new Customer()
  
  constructor(private custService: AppService, private router:Router) { }

  ngOnInit() {
  }



  updatemobile() : void{
   
    this.custService.updatemobile(this.customer).subscribe(cust=>
      
      
      {
        
          this.router.navigate(['/auth/view-profile']);
      });
  
  }

}
