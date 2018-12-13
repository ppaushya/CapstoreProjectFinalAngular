import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SortService } from './sort.service';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  selectedOption:number;
  
  constructor(private sortservice:AppService) { }
  options = [
    
       'Price:Low to High',
    
    'Price:High to Low',
   
       'Best sellers',
      'Most Viewed'
    
  ];

  @Output() selectedSortOption = new EventEmitter<number>();

sendoption(){
  console.log(this.selectedOption);
  this.sortservice.set_sort_option(this.selectedOption);
  console.log("send option");
  this.selectedSortOption.emit(this.selectedOption);
}
  

  ngOnInit() {
    this.sendoption();
   
  }

}
