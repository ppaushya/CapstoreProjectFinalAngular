import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../pojo/product';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss'],
})
export class ViewPageComponent implements OnInit {
  color: any;

  size: any;

  product: Product;

  recent: Product[];

  sub: any;

  constructor( private route: ActivatedRoute) {
  }

  ngOnInit() {
    
    // this.route.params.subscribe(params => {
    //   this.product = this.data.products.find(p => p.id === parseInt(params.id, 10));
    //   this.recent = this.data.products.slice(0, 4);
    // });
  }



  











}
