import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  mailid:string;

  constructor() { }

  setMailId(str:string)
  {
      this.mailid=str;
  }

  getMailId():string
  {
    return this.mailid;
  }
}
