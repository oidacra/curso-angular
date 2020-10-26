import { IProductos } from '../productos/models/productos';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const productos: IProductos[] = [
      {
        id: 1,
        sku: 123865,
        name: 'SAMSUNG GALAXY S10 PLUS',
        brand: 'Samsung',
        category: 'Tablets',
        price: 1199.95,
        stock: 50,
        image:
          'https://www.panafoto.com/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/1/3/137304-13.jpg',
      },
      {
        id: 2,
        sku: 12344,
        name: 'LG K22+ MIL-STD 810G',
        brand: 'Lg',
        category: 'Celular',
        price: 119.95,
        stock: 50,
        image:
          'https://www.panafoto.com/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/1/4/143856.jpg',
      },
      {
        id: 3,
        sku: 64332,
        name: 'SM A315G DS WHITE GTO',
        brand: 'Samsung',
        category: 'Celular',
        price: 239.95,
        stock: 50,
        image:
          'https://www.panafoto.com/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/1/4/143773.jpg',
      },
    ];
    return { productos };
  }
}
