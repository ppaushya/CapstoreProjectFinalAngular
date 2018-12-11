import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/meta';
import { ProductService } from '../../header/main-header/main-header.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  products:Product[];
  filteredProducts:Product[];
  searchTerm: string;

  public imagesUrl;
  constructor(private _productService: ProductService){
    this.products= this._productService.getProducts();
    this.filteredProducts=this.products;
    this._productService.getPerformFilter().subscribe(
      serach => {
        this.searchTerm = serach['text'];
        this.filteredProducts=this.searchTerm ? this.performFilter(this.searchTerm):this.products;
      }
    );
   
  }


  performFilter(filterBy:string):any []{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:Product)=>
     product.title.toLocaleLowerCase().indexOf(filterBy)!==-1 ||product.description.toLocaleLowerCase().indexOf(filterBy)!==-1 ||product.category.toLocaleLowerCase().indexOf(filterBy)!==-1);
}
  ngOnInit() {
  
  }


  ////////////////////////////////


  
  index = 1;
  speed = 3500;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '12345'.split('').map((x, i) => {
    const num = i;
    return {
      url: `/assets/p5-${num}.jpg`,
      title: `${num}`
    };
  });

  push() {
    this.avatars.push(
      {
        url: `https://picsum.photos/600/400/?${this.avatars.length + 1}`,
        title: `${this.avatars.length + 1}`
      }
    );
  }

  remove() {
    this.avatars.splice(this.avatars.length - 1, 1);
  }


  // indexChanged(index) {
  //   console.log(index);
  // }

  toggleDirection($event) {
    this.direction = this.directionToggle ? 'right' : 'left';
  }



}
