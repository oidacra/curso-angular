import { IProductos } from './../../../productos/models/productos';
import { ProductosService } from './../../services/productos.service';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos-service-listado',
  templateUrl: './productos-service-listado.component.html',
  styleUrls: ['./productos-service-listado.component.scss'],
})
export class ProductosServiceListadoComponent implements OnInit {
  selectedId: number;
  public productos$;

  constructor(private productosServices: ProductosService) {}

  ngOnInit(): void {
    this.productos$ = this.productosServices.productos;
  }

  selectProducto(productoId: number) {
    this.selectedId = productoId;
    this.productosServices.selectProducto(productoId);
  }
}
