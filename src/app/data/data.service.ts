import { Injectable } from '@angular/core';
import { Product } from './meta';

@Injectable()
export class DataService {
  products: Product[] = [
    {
      id: 1,
      title: 'Roxy Women\'s Jetty Block Snow Jacket',
      description: 'The Roxy Women\'s Jetty Block Snow Jacket combines a great look with alpine performance!',
      category: 'electronics',
      picture: '/assets/p1-1.jpg',
      price: 170,
      sale: 785,
      photos: [
        {
          thumb: '/assets/p1-1.jpg',
          full: '/assets/p1-1.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p1-2.jpg',
          full: '/assets/p1-2.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p1-3.jpg',
          full: '/assets/p1-3.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p1-4.jpg',
          full: '/assets/p1-4.jpg',
          description: 'Jacket',
        },
      ],
    },
    {
      id: 2,
      title: 'Spyder Women\'s Willow Snow Jacket',
      description: 'The Spyder Women\'s Willow Snow Jacket has a long, lean silhouette and athletic fit!',
      picture: '/assets/p2-1.jpg',
      category: 'electronics',
      price: 400,
      sale: 785,
      photos: [
        {
          thumb: '/assets/p2-1.jpg',
          full: '/assets/p2-1.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p2-2.jpg',
          full: '/assets/p2-2.jpg',
          description: 'Jacket',
        },
      ],
    },
    {
      id: 3,
      title: 'Women\'s Autumn Insulated Snowboard Jacket',
      description: 'The Jacket is tailored to fit your needs.',
      category: 'healthcare',
      picture: '/assets/p3-1.jpg',
      price: 90,
      sale: 3654,
      photos: [
        {
          thumb: '/assets/p3-1.jpg',
          full: '/assets/p3-1.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p3-2.jpg',
          full: '/assets/p3-2.jpg',
          description: 'Jacket',
        },
      ],
    },
    {
      id: 4,
      title: 'Burton Women\'s Expedition 1/4 Zip Base Layer Top',
      description: 'Built-in Stretch 360° for rider-friendly mobility, and zip-venting to regulate active body temps.',
      category: 'healthcare',
      picture: '/assets/p4-1.jpg',
      price: 79,
      sale: 897,
      photos: [
        {
          thumb: '/assets/p4-1.jpg',
          full: '/assets/p4-1.jpg',
          description: 'Base Layer Top',
        },
        {
          thumb: '/assets/p4-2.jpg',
          full: '/assets/p4-2.jpg',
          description: 'Base Layer Top',
        },
      ],
    },
    {
      id: 5,
      title: 'Nils Women\'s Lucy Print Leggings',
      description: 'The are heavyweight, fleece backed, body hugging baselayer that will move with you down the slopes. ',
      category: 'healthcare',
      picture: '/assets/p5-1.jpg',
      price: 125,
      sale: 523,
      photos: [
        {
          thumb: '/assets/p5-1.jpg',
          full: '/assets/p5-1.jpg',
          description: 'Lucy',
        },
        {
          thumb: '/assets/p5-2.jpg',
          full: '/assets/p5-2.jpg',
          description: 'Lucy',
        },
      ],
    },
    {
      id: 6,
      title: 'Burton Women\'s Starr Vest',
      description: 'Is the epitome of comfort and versatility thanks to a sweater fleece fabric.',
      category: 'automobiles',
      picture: '/assets/p6-1.jpg',
      price: 75,
      sale: 963,
      photos: [
        {
          thumb: '/assets/p6-1.jpg',
          full: '/assets/p6-1.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p6-2.jpg',
          full: '/assets/p6-3.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p6-3.jpg',
          full: '/assets/p6-3.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p6-4.jpg',
          full: '/assets/p6-4.jpg',
          description: 'Vest',
        },
      ],
    },
    {
      id: 7,
      title: 'Dylan by True Grit Women\'s Flannel & Sherpa Road Trip Vest',
      description: 'Is a nice piece to cap of your fall or winter wardrobe.',
      category: 'books',
      picture: '/assets/p7-1.jpg',
      price: 124,
      sale: 896,
      photos: [
        {
          thumb: '/assets/p7-1.jpg',
          full: '/assets/p7-1.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p7-2.jpg',
          full: '/assets/p7-2.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p7-3.jpg',
          full: '/assets/p7-3.jpg',
          description: 'Vest',
        },
      ],
    },
    {
      id: 8,
      title: 'O\'Neill Exalt Ski Pants',
      description: 'For the technical side they have 10K/10K waterproofing & breathability and O\'Neill Hyperdry to keep you warm and dry.',
      category: 'grocery',
      picture: '/assets/p8-1.jpg',
      price: 140,
      sale: 1963,
      photos: [
        {
          thumb: '/assets/p8-1.jpg',
          full: '/assets/p8-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p8-2.jpg',
          full: '/assets/p8-2.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p8-3.jpg',
          full: '/assets/p8-4.jpg',
          description: 'Pants',
        },
      ],
    },
    {
      id: 9,
      title: 'Strafe Outerwear Capital Snow Pants',
      description: 'Will repel any type of weather you encounter during your mountain adventure',
      category: 'grocery',
      picture: '/assets/p9-1.jpg',
      price: 350,
      sale: 174,
      photos: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
    
    {
      id: 9,
      title: 'Strafe Outerwear Capital Snow Pants',
      description: 'Will repel any type of weather you encounter during your mountain adventure',
      category: 'beauty',
      picture: '/assets/p9-1.jpg',
      price: 350,
      sale: 1887,
      photos: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
    
    {
      id: 9,
      title: 'Strafe Outerwear Capital Snow Pants',
      description: 'Will repel any type of weather you encounter during your mountain adventure',
      category: 'beauty',
      picture: '/assets/p9-1.jpg',
      price: 350,
      sale: 195,
      photos: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
    
    {
      id: 9,
      title: 'Strafe Outerwear Capital Snow Pants',
      description: 'Will repel any type of weather you encounter during your mountain adventure',
      category: 'healthcare',
      picture: '/assets/p9-1.jpg',
      price: 350,
      sale: 183,
      photos: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
    
    {
      id: 9,
      title: 'Strafe Outerwear Capital Snow Pants',
      description: 'Will repel any type of weather you encounter during your mountain adventure',
      category: 'healthcare',
      picture: '/assets/p9-1.jpg',
      price: 350,
      sale: 153,
      photos: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
    
    {
      id: 9,
      title: 'Strafe Outerwear Capital Snow Pants',
      description: 'Will repel any type of weather you encounter during your mountain adventure',
      category: 'healthcare',
      picture: '/assets/p9-1.jpg',
      price: 350,
      sale: 164,
      photos: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
    
    {
      id: 9,
      title: 'Strafe Outerwear Capital Snow Pants',
      description: 'Will repel any type of weather you encounter during your mountain adventure',
      category: 'healthcare',
      picture: '/assets/p9-1.jpg',
      price: 350,
      sale: 123,
      photos: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
    
    {
      id: 9,
      title: 'Strafe Outerwear Capital Snow Pants',
      description: 'Will repel any type of weather you encounter during your mountain adventure',
      category: 'books',
      picture: '/assets/p9-1.jpg',
      price: 350,
      sale: 125,
      photos: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
    
    {
      id: 9,
      title: 'Strafe Outerwear Capital Snow Pants',
      description: 'Will repel any type of weather you encounter during your mountain adventure',
      category: 'books',
      picture: '/assets/p9-1.jpg',
      price: 350,
      sale: 120,
      photos: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
    
    {
      id: 9,
      title: 'Strafe Outerwear Capital Snow Pants',
      description: 'Will repel any type of weather you encounter during your mountain adventure',
      category: 'grocery',
      picture: '/assets/p9-1.jpg',
      price: 350,
      sale: 180,
      photos: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
  ];
}
