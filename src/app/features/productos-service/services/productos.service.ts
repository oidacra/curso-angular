import { IProductos } from './../../productos/models/productos';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private __products: IProductos[];

  private __productosBehaviorSubject = new BehaviorSubject<IProductos[]>(null);

  /* @Output()
  productos = new EventEmitter<IProductos[]>(); */

  @Output()
  selectedProductData = new EventEmitter<IProductos>();

  constructor(private httpClient: HttpClient) {
    this.getAll();
    console.log('Load productos');
  }

  get productos() {
    return this.__productosBehaviorSubject.asObservable();
  }

  public getAll() {
    this.httpClient
      .get<IProductos[]>('assets/products.json')
      .subscribe((productos: IProductos[]) => {
        // Lo guardo para despues
        this.__products = productos;
        // Emito
        this.__productosBehaviorSubject.next(this.__products);
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

  public add(producto: IProductos) {
    producto.id = this.__products.length + 1;
    this.__products.push(producto);

    this.__productosBehaviorSubject.next(this.__products);
  }
}
