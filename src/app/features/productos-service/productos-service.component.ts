import { IProductos } from './../productos/models/productos';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ProductosService } from './services/productos.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-service',
  templateUrl: './productos-service.component.html',
  styleUrls: ['./productos-service.component.scss'],
})
export class ProductosServiceComponent {
  productos$: Observable<IProductos[]>; // La asignación se puede hacer directo aqui
  selectedProducto$: Observable<IProductos>; // La asignación se puede hacer directo aqui
  selectedId$: Observable<number>; // La asignación se puede hacer directo aqui

  constructor(
    private productosServices: ProductosService,
    private route: ActivatedRoute
  ) {
    // datos del producto seleccionado
    this.selectedProducto$ = this.route.paramMap.pipe(
      tap((params) => console.log(params)), // <- veo que trae params
      map((params) => params.get('id')), // <- obtengo el id específico

      map((id) => this.productosServices.selectProducto(+id)), //<-- Utilizo el id seleccionado para seleccior producto
      switchMap((id) => this.productosServices.selectedProduct$) // <-- selecciono el selectedProducto Observable
    );
    // Listado de productos
    this.productos$ = this.productosServices.products$;
    // Id seleccionado
    this.selectedId$ = this.productosServices.productoSelectedId$;
  }
}
