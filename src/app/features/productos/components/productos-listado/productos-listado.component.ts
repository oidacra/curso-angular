import { AuthService } from './../../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { Producto } from './../../model/producto.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ProductosAddComponent } from '../productos-add/productos-add.component';

import { ProductosService } from '../../services/productos.service';
import { filter, find, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-productos-listado',
  templateUrl: './productos-listado.component.html',
  styleUrls: ['./productos-listado.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // <- Comentar y ver en consola la cantidad de veces que se hace check()changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosListadoComponent {
  isLogged$: Observable<boolean>;
  @Input()
  productos: Producto[];

  @Input()
  selectedId: string;

  constructor(
    private authService: AuthService,
    private productosService: ProductosService,
    public dialog: MatDialog
  ) {
    // TODO: Mejorar esto
    this.isLogged$ = this.authService.user$.pipe(
      tap((v) => console.log(v)),
      map((user) => {
        console.log(user);
        return user != null ? false : true;
      })
    );
  }

  selectProduct(productId) {
    this.productosService.selectProducto(productId);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductosAddComponent, {
      width: '600px',
    });
  }
}
