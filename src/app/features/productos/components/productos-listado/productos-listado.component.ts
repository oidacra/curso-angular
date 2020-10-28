import { Producto } from './../../model/producto.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ProductosAddComponent } from '../productos-add/productos-add.component';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos-listado',
  templateUrl: './productos-listado.component.html',
  styleUrls: ['./productos-listado.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // <- Comentar y ver en consola la cantidad de veces que se hace check()changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosListadoComponent {
  @Input()
  productos: Producto[];

  @Input()
  selectedId: string;

  constructor(
    private productosService: ProductosService,
    public dialog: MatDialog
  ) {}

  selectProduct(productId) {
    this.productosService.selectProducto(productId);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductosAddComponent, {
      width: '600px',
    });
  }
}
