import { Component, Input } from '@angular/core';
import { Product } from '../../pojo/product';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product: Product;
}
