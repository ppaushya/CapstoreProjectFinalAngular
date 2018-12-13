import { Injectable, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService implements OnInit{

  constructor(private appservice: AppService) { }

  ngOnInit()
  {
    this.appservice.getMailId();
  }
}
