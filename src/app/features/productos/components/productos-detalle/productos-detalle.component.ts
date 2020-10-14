import { IProductos } from './../../models/productos';
import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.scss'],
})
export class ProductosDetalleComponent implements OnChanges {
  @Input()
  producto: IProductos;

  @Output()
  clearSelectionChild = new EventEmitter();

  // Esto detecta los cambios del input
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        let change = changes[propName];
        switch (propName) {
          case 'producto': {
            console.log(`value:`, change.currentValue);
          }
        }
      }
    }
  }

  clearSelected() {
    this.clearSelectionChild.emit();
  }
}
