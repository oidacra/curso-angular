import { ProductosService } from './services/productos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-service',
  templateUrl: './productos-service.component.html',
  styleUrls: ['./productos-service.component.scss'],
})
export class ProductosServiceComponent implements OnInit, OnDestroy {
  private sub: any;
  public productoIdParam: number;
  constructor(
    private productosServices: ProductosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.productosServices.getAll(); -> pasado al contructor del service
    this.sub = this.route.params.subscribe((params) => {
      this.productoIdParam = +params['id']; // (+) converts string 'id' to a number
      console.log(this.productoIdParam);
      if (this.productoIdParam) {
        this.productosServices.selectProducto(this.productoIdParam);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
