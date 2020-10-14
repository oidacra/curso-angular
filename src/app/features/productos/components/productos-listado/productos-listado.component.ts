import { IProductos } from './../../models/productos';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-productos-listado',
  templateUrl: './productos-listado.component.html',
  styleUrls: ['./productos-listado.component.scss'],
})
export class ProductosListadoComponent implements OnChanges {
  // Entrada de componente
  @Input()
  productos: IProductos[];

  @Input()
  selectedId: number;
  // Salida de componente
  @Output()
  selectedItemChild = new EventEmitter<number>();

  selectProducto(productoId: number) {
    this.selectedItemChild.emit(productoId);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
