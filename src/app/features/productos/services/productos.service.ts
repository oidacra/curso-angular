import { combineLatest } from 'rxjs';
import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { Producto } from './../model/producto.model';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  // Obtengo todos los productos de mi collection
  products$ = this.firestore
    .collection<Producto>('productos')
    .valueChanges({ idField: 'id' });
  // Subject para el manejo del selected id
  private __productSelectedIdSubject = new BehaviorSubject<string>('');

  // Observable de la data del producto seleccionado
  selectedProduct$ = combineLatest([
    this.products$, // <- si cambia productos se ejecuta todo nuevamente
    this.productoSelectedId$, // <- si cambia el id seleccionado se ejecuta todo nuevamente
  ]).pipe(
    map(([products, selectedProductId]) => {
      if (products) {
        return products.find((product) => product.id === selectedProductId);
      }
    }),
    shareReplay(1)
  );

  // Retorno el observable del BehaviorSubject por getter
  get productoSelectedId$() {
    return this.__productSelectedIdSubject.asObservable();
  }

  // Metodo para cambiar el id de Producto -> dispara selectedProduct$ automaticamente por el cambio
  public selectProducto(productId: string) {
    this.__productSelectedIdSubject.next(productId);
  }
  // Metodo para cambiar resetear el Producto -> dispara selectedProduct$ automaticamente por el cambio
  public clearSelected() {
    this.__productSelectedIdSubject.next('');
  }

  /**
   * Método para agregar producto al collection de Firebase
   * @param producto
   */
  addProduct(producto: Producto) {
    // convierto el objeto de tipo producto a JSON
    const productoObject = { ...producto };
    return this.firestore.collection('productos').add(productoObject);
  }

  /**
   * Método para hacer update de producto especificando el id
   * @param producto
   */
  updateProduct(producto: Producto) {
    // convierto el objeto de tipo producto a JSON
    const productoObject = { ...producto };
    return this.firestore
      .doc('productos/' + producto.id) // <- importante el id
      .update(productoObject);
  }

  /**
   * Método para eliminar un producto del collection de Firebase
   * @param productoId
   */
  deleteProduct(productoId: string) {
    return this.firestore.doc('productos/' + productoId).delete();
  }

  constructor(private firestore: AngularFirestore) {}
}
