import { Component } from '@angular/core';

import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent {
  productos$ = this.productosService.products$;
  productoSelectedId$ = this.productosService.productoSelectedId$;
  productoSelectedData = this.productosService.selectedProduct$;

  constructor(private productosService: ProductosService) {}
}
