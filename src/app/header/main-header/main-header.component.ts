import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../data/meta';
import { ProductService } from './main-header.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit{
 // inputModel: any;

  displayMenu = false;

  menuAnchor: any;

 
  _listFilter:string;
   //filteredProducts: IProduct[];
  products: Product[]=[]
  

  constructor(public el: ElementRef,private _productService: ProductService,
    
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.menuAnchor = this.el.nativeElement;
    this.products= this._productService.getProducts();
  
  }



  get listFilter() :string {
    return this._listFilter;
}
set listFilter(value:string) {
    this._listFilter=value;

    this._productService.performFilter(this.listFilter);

}






}
