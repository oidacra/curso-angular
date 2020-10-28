import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductosService } from '../../services/productos.service';
import { ProductosAddComponent } from '../productos-add/productos-add.component';
import { Producto } from './../../model/producto.model';
@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // <- Comentar y ver en consola la cantidad de veces que se hace check()changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosDetalleComponent {
  @Input('producto') // <- Puedo utilizar un Alias del input, e internamente llamarlo de otra forma
  selectedProducto: Producto;

  constructor(
    private productosService: ProductosService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  clearSelected() {
    this.productosService.clearSelected();
  }
  deleteProduct(productId) {
    this.productosService
      .deleteProduct(productId)
      .then(() => this.__handleSuccess('Producto borrado exitosamente'))
      .catch(() => this.__handleError());
  }
  openDialog() {
    const dialogRef = this.dialog.open(ProductosAddComponent, {
      width: '600px',
      data: this.selectedProducto,
    });
  }
  //TODO: Esto se puede crear un class y se hereda para no estar creando esto en cada componente (Extends)
  private __handleError() {
    this._snackBar.open('Error guardando', 'Cerrar', {
      duration: 2000,
    });
  }
  private __handleSuccess(msg: string) {
    this._snackBar.open(msg, 'Cerrar', {
      duration: 2000,
    });
  }
}
