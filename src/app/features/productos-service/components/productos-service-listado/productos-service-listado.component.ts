import { IProductos } from './../../../productos/models/productos';
import { ProductosService } from './../../services/productos.service';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos-service-listado',
  templateUrl: './productos-service-listado.component.html',
  styleUrls: ['./productos-service-listado.component.scss'],
})
export class ProductosServiceListadoComponent implements OnInit, OnDestroy {
  public productos: IProductos[];
  selectedId: number;

  public productos$: EventEmitter<IProductos[]>;

  // private __suscriptions = new Subscription();

  constructor(private productosServices: ProductosService) {}

  ngOnInit(): void {
    /* this.__suscriptions.add(
      this.productosServices.productos.subscribe((productos) => {
        this.productos = productos;
      })
    ); */

    this.productos$ = this.productosServices.productos;
  }
  selectProducto(productoId: number) {
    this.selectedId = productoId;
    this.productosServices.selectProducto(productoId);
  }

  ngOnDestroy() {
    /* this.__suscriptions.unsubscribe();  */
  }
}
