import { IProductos } from './../../productos/models/productos';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private __products: IProductos[];

  private __productosBehaviorSubject = new BehaviorSubject<IProductos[]>(null);
  //public productObservable$ = this.__productosBehaviorSubject.asObservable(); <- otra forma de emitir un Observable

  /* @Output()
  productos = new EventEmitter<IProductos[]>(); */

  @Output()
  selectedProductData = new EventEmitter<IProductos>();

  constructor(private httpClient: HttpClient) {
    this.__getAll();
    console.log('Load productos');
  }

  // Getter
  get productos() {
    return this.__productosBehaviorSubject.asObservable();
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

  private __getAll() {
    this.httpClient
      .get<IProductos[]>('assets/products.json')
      .subscribe((productos: IProductos[]) => {
        // Lo guardo para despues
        this.__products = productos;
        // Emito
        this.__productosBehaviorSubject.next(this.__products);
      });
  }
}
