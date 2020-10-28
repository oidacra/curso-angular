import { IProductos } from './../../../productos/productos';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

import { ProductosService } from './../../services/productos.service';
@Component({
  selector: 'app-productos-service-detalle',
  templateUrl: './productos-service-detalle.component.html',
  styleUrls: ['./productos-service-detalle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // <- Comentar y ver en consola la cantidad de veces que se hace check()changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosServiceDetalleComponent implements OnInit, OnDestroy {
  @Input('producto') // <- Puedo utilizar un Alias del input, e internamente llamarlo de otra forma
  selectedProducto: IProductos;

  constructor(private productosServices: ProductosService) {}

  ngOnInit(): void {
    console.log('Created: ProductosServiceDetalleComponent');
  }

  clearSelected() {
    this.productosServices.clearSelected();
  }

  ngOnDestroy() {
    console.log('Destroy: ProductosServiceDetalleComponent');
  }

  check() {
    console.log(
      'View del Componente [ProductosServiceDetalleComponent] verificado'
    );
  }
}
