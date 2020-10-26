import { IProductos } from './../productos/models/productos';
import { Observable } from 'rxjs';

import { ProductosService } from './services/productos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-service',
  templateUrl: './productos-service.component.html',
  styleUrls: ['./productos-service.component.scss'],
})
export class ProductosServiceComponent implements OnInit, OnDestroy {
  productos$: Observable<IProductos[]>; // La asignación se puede hacer directo aqui
  selectedProducto$: Observable<IProductos>; // La asignación se puede hacer directo aqui
  selectedId$: Observable<number>; // La asignación se puede hacer directo aqui

  constructor(private productosServices: ProductosService) {
    // datos del producto seleccionado
    this.selectedProducto$ = this.productosServices.selectedProduct$;
    // Listado de productos

    this.productos$ = this.productosServices.productsWithAdd$;
    // Id seleccionado
    this.selectedId$ = this.productosServices.productoSelectedId$;
  }
  ngOnInit() {
    console.log('Creado ProductosServiceComponent');
  }
  ngOnDestroy() {
    console.log('Destruido ProductosServiceComponent');
  }
}
