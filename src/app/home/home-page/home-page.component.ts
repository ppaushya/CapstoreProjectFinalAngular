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
    this.imagesUrl = [
      'http://www.telegraph.co.uk/content/dam/motoring2/2015/12/07/01-Kia-Sportage-front-xlarge_trans_NvBQzQNjv4BqrWYeUU_H0zBKyvljOo6zlkYMapKPjdhyLnv9ax6_too.jpg',
      'http://www.telegraph.co.uk/cars/images/2017/01/24/A5-Sportback-main-xlarge_trans_NvBQzQNjv4BqZR6q1BRVjLLZ5nciTmZ6ABYYy2HF4Csw_oYIEcbI_AA.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPopqXeuO7fqot51N7vaZuh9EqBYgZkLexcmQ_A0Fy0CjjW6J',
      'https://www.cars.co.za/carimages_gen/Audi-TT/Audi-TT-coupe-1.8TFSI_AudiTT3c6l.jpg',
      'http://comicsalliance.com/files/2011/04/strips02.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4HTtZrfKqNo5riVYiOBBL7-9laaPZcW1RfDfYGvb6BezfMtQ',
      'https://s-media-cache-ak0.pinimg.com/originals/73/f3/08/73f30861d214eea1d6c5d99fe72b3053.jpg',
      'https://bmj2k.files.wordpress.com/2011/04/heroes.jpg'
    ];
  }


  ////////////////////////////////


  
  index = 0;
  speed = 5000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '12345'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
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


  indexChanged(index) {
    console.log(index);
  }

  toggleDirection($event) {
    this.direction = this.directionToggle ? 'right' : 'left';
  }
}
