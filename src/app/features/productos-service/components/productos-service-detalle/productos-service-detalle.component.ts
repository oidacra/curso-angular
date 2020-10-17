import { IProductos } from './../../../productos/models/productos';
import { ProductosService } from './../../services/productos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos-service-detalle',
  templateUrl: './productos-service-detalle.component.html',
  styleUrls: ['./productos-service-detalle.component.scss'],
})
export class ProductosServiceDetalleComponent implements OnInit, OnDestroy {
  producto: IProductos;
  private __suscriptions = new Subscription();
  constructor(private productosServices: ProductosService) {}

  ngOnInit(): void {
    this.__suscriptions.add(
      this.productosServices.selectedProductData.subscribe(
        (producto: IProductos) => {
          this.producto = producto;
        }
      )
    );
  }

  clearSelected() {
    this.productosServices.clearSelected();
  }

  ngOnDestroy() {
    this.__suscriptions.unsubscribe();
  }
}
