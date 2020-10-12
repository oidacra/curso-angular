import { Component } from '@angular/core';

interface IProduct {
  author: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  releseDate: Date;
}

@Component({
  selector: 'app-pipes',
  template: `
    <h1>Pipes</h1>
    {{ 'Arcadio' | lowercase }} <br />
    {{ product.name | uppercase }} <br />
    {{ product.rating | number: '1.2-2' }} <br />
    {{ product.reviews | number }} <br />
    {{ product.price | currency }} <br />
    {{ product.releseDate | date: 'MM/dd/yyyy a hh:mm:ss' }}

    <!-- currency:'AUD':true:'3.2-2'-->
  `,
})
export class PipesComponent {
  product: IProduct = {
    author: 'Arcadio Quintero',
    name: 'Angular de 0 a 100',
    rating: 4.9823,
    reviews: 23400,
    price: 124.95,
    releseDate: new Date(2020, 8, 10),
  };
}
