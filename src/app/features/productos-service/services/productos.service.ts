import { IProductos } from './../../productos/models/productos';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private __products: IProductos[];

  @Output()
  productos = new EventEmitter<IProductos[]>();

  @Output()
  selectedProductData = new EventEmitter<IProductos>();

  constructor(private httpClient: HttpClient) {}

  public getAll() {
    this.httpClient
      .get<IProductos[]>('assets/products.json')
      .subscribe((productos: IProductos[]) => {
        this.productos.emit(productos);
        this.__products = productos;
      });
  }

  public selectProducto(productId: number) {
    const productoSelectedData = this.__products.find(
      (producto: IProductos) => producto.id === productId
    );
    this.selectedProductData.emit(productoSelectedData);
  }
  public clearSelected() {
    this.selectedProductData.emit();
  }
}
