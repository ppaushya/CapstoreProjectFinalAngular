import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  options = [
    {
      label: 'Price:Low to High',
      value: 1,
    },
    {
      label: 'Price:High to Low',
      value: 2,
    },
    {
      label: 'Range',
      value: 3,
    },
    {
      label: 'Most Viewed',
      value: 4,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
