import { Component, OnInit } from '@angular/core';
import { Product } from '../../pojo/product';
import { AppService } from '../../app.service';

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
  constructor(private _productService: AppService){
    this.filteredProducts=this.products;
  
   
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
