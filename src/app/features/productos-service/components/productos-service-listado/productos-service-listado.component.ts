import { IProductos } from './../../../productos/models/productos';
import { ProductosService } from './../../services/productos.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ProductosServiceAddComponent } from '../productos-service-add/productos-service-add.component';

@Component({
  selector: 'app-productos-service-listado',
  templateUrl: './productos-service-listado.component.html',
  styleUrls: ['./productos-service-listado.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // <- Comentar y ver en consola la cantidad de veces que se hace check()changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosServiceListadoComponent implements OnInit, OnDestroy {
  @Input()
  productos: IProductos[];

  @Input()
  selectedId: number;

  constructor(
    private productosServices: ProductosService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log('Created: ProductosServiceListadoComponent');
  }

  selectProduct(productId) {
    this.productosServices.selectProducto(productId);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductosServiceAddComponent, {
      width: '600px',
    });
  }
  ngOnDestroy() {
    console.log('Destroy component: ProductosServiceListadoComponent');
  }

  check() {
    console.log(
      'View del Componente [ProductosServiceListadoComponent] verificado'
    );
  }
}
