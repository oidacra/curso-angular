import { IProductos } from './../../productos/models/productos';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  Subject,
  throwError,
} from 'rxjs';
import { from } from 'rxjs';
import { map, tap, shareReplay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productsUrl = 'assets/products.json';
  private __products: IProductos[] | undefined;

  products$ = this.httpClient.get<IProductos[]>(this.productsUrl).pipe(
    tap((data) => console.log('Products', JSON.stringify(data))),
    catchError(this.handleError)
  );

  private __productosBehaviorSubject = new BehaviorSubject<IProductos[]>(null);

  private productSelectedIdSubject = new BehaviorSubject<number>(0);

  selectedProduct$ = combineLatest([
    this.products$,
    this.productoSelectedId$,
  ]).pipe(
    map(([products, selectedProductId]) => {
      //console.log(products); // <- Valor emitido de primer observable
      //console.log(selectedProductId); // Valor emitido del segundo observable
      return products.find((product) => product.id === selectedProductId);
    }),
    tap((product) => console.log('selectedProduct', product)),
    shareReplay(1)
  );

  constructor(private httpClient: HttpClient) {}

  get productos$() {
    return this.__productosBehaviorSubject.asObservable();
  }
  get productoSelectedId$() {
    return this.productSelectedIdSubject.asObservable();
  }

  public getAll() {
    this.httpClient
      .get<IProductos[]>('assets/products.json')
      .subscribe((productos: IProductos[]) => {
        // Lo guardo para despues
        this.__products = productos;
        // Emito
        console.log(productos);
        this.__productosBehaviorSubject.next(this.__products);
      });
  }

  public selectProducto(productId: number) {
    this.productSelectedIdSubject.next(productId);
    //return from([productoSelectedData]);
  }

  public clearSelected() {
    this.productSelectedIdSubject.next(0);
  }

  public add(producto: IProductos) {
    producto.id = this.__products.length + 1;
    this.__products.push(producto);

    this.__productosBehaviorSubject.next(this.__products);
  }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
