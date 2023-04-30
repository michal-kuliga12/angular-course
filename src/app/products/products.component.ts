import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Watch',
      price: '109',
      color: 'black',
      available: 'Available',
      image: '/assets/watch.jpg',
    },
    {
      id: 2,
      name: 'Smart TV',
      price: '3339',
      color: 'black',
      available: 'Not available',
      image: '/assets/smart-tv.jpg',
    },
    {
      id: 3,
      name: 'Iphone 12',
      price: '1339',
      color: 'black',
      available: 'Available',
      image: '/assets/iphone.jpg',
    },
  ];
}
