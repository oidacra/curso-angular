import { IProductos } from './../../../productos/models/productos';
import { ProductosService } from './../../services/productos.service';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

  public productos$;
  public productosObservable$;

  constructor(
    private productosServices: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Created: ProductosServiceListadoComponent');
  }

  goToProduct(productId) {
    this.router.navigate(['productos-service', productId]);
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
