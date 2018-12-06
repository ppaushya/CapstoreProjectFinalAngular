import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Product } from '../../data/meta';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../header/main-header/main-header.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  products: Product[];
  category: string;
  filteredProducts : Product[];
  searchedProducts : Product[];
  searchTerm: string;

  constructor(private data: DataService,
          private route: ActivatedRoute,
          private _productService: ProductService) {
            this.products= this._productService.getProducts();
            this.searchedProducts =this.products;
            this._productService.getPerformFilter().subscribe(
              serach => {
                this.searchTerm = serach['text'];
                this.searchedProducts =this.searchTerm ? this.performFilter(this.searchTerm):this.products;
  }
            );}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
              this.category = params['category'];
            });
    this.products = this.data.products;
    this.applyFilter();  
  }

  private applyFilter() {
    this.filteredProducts = !this.category ? this.products
    : this.products.filter(e => e.category === this.category); 
  }


  performFilter(filterBy:string):any []{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:Product)=>
     product.title.toLocaleLowerCase().indexOf(filterBy)!==-1 ||product.description.toLocaleLowerCase().indexOf(filterBy)!==-1 ||product.category.toLocaleLowerCase().indexOf(filterBy)!==-1);
  

   
   
      }
  }

