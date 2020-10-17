import { ProductosService } from './services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-service',
  templateUrl: './productos-service.component.html',
  styleUrls: ['./productos-service.component.scss'],
})
export class ProductosServiceComponent implements OnInit {
  constructor(private productosServices: ProductosService) {}

  ngOnInit(): void {
    this.productosServices.getAll();
  }
}
