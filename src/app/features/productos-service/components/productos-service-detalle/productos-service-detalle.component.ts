import { IProductos } from './../../../productos/models/productos';
import { ProductosService } from './../../services/productos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-service-detalle',
  templateUrl: './productos-service-detalle.component.html',
  styleUrls: ['./productos-service-detalle.component.scss'],
})
export class ProductosServiceDetalleComponent implements OnInit, OnDestroy {
  producto: IProductos;
  private __suscriptions = new Subscription();
  constructor(
    private productosServices: ProductosService,
    private router: Router
  ) {}

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
    this.router.navigate(['/productos-service']);
    //this.productosServices.clearSelected();
  }

  ngOnDestroy() {
    this.__suscriptions.unsubscribe();
  }
}
