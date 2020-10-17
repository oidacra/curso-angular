import { IProductos } from './models/productos';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  public products: IProductos[] = [];
  public productoSelectedParent: IProductos | undefined = undefined;
  public selectedProductId: number = 0;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get('assets/products.json')
      .subscribe((data: IProductos[]) => {
        console.log(data);
        this.products = data;
      });
  }
  selectedProductParent(productId: number) {
    console.log(productId);
    this.selectedProductId = productId;
    this.productoSelectedParent = this.products.find(
      (producto: IProductos) => producto.id === productId
    );
  }

  resetSelection() {
    this.productoSelectedParent = undefined;
    this.selectedProductId = 0;
  }
}
