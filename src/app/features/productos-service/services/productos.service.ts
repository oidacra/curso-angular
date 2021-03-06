import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  merge,
  Observable,
  Subject,
  throwError,
} from 'rxjs';

import { map, tap, shareReplay, catchError, scan } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProductos } from '../../productos/productos';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productsUrl = '/api/productos';

  private __productDataBehaviorSubject = new Subject<IProductos[]>();
  products$ = this.__productDataBehaviorSubject.asObservable();

  private __productSelectedIdSubject = new BehaviorSubject<number>(0);

  // Action Stream
  private __productInsertedSubject = new Subject<IProductos>();
  productInsertedAction$ = this.__productInsertedSubject.asObservable();

  productsWithAdd$ = merge(this.products$, this.productInsertedAction$).pipe(
    scan((acc: IProductos[], value: IProductos) => {
      return [...acc, value];
    }),
    catchError((err) => {
      return throwError(err);
    })
  );

  selectedProduct$ = combineLatest([
    this.productsWithAdd$,
    this.productoSelectedId$,
  ]).pipe(
    map(([products, selectedProductId]) => {
      console.log(products); // <- Valor emitido de primer observable
      console.log(selectedProductId); // Valor emitido del segundo observable
      if (products) {
        return products.find((product) => product.id === selectedProductId);
      }
    }),
    tap((product) => console.log('selectedProduct', product)),
    shareReplay(1)
  );

  constructor(private http: HttpClient, private firestore: AngularFirestore) {
    console.log('constructor load data');

    this.http
      .get<IProductos[]>(this.productsUrl)
      .pipe(
        tap((data) => console.log('Products', JSON.stringify(data))),
        catchError(this.handleError)
      )
      .subscribe((data: IProductos[]) => {
        console.log(data);

        this.__productDataBehaviorSubject.next(data);
      });
  }

  get productoSelectedId$() {
    return this.__productSelectedIdSubject.asObservable();
  }

  public selectProducto(productId: number) {
    this.__productSelectedIdSubject.next(productId);
  }

  public clearSelected() {
    this.__productSelectedIdSubject.next(0);
  }

  public add(producto: IProductos) {
    producto.id = Math.floor(Math.random() * 100); // genero un id random, esto puede asignar numeros que ya esten utilizados, en un api normal el backend se encarga de hacer esot

    this.__productInsertedSubject.next(producto);

    return this.http
      .post(this.productsUrl, producto)
      .pipe(map((val) => console.log(val)));
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

  // FIREBASE
  getAllFromFirebase(): Observable<IProductos[]> {
    return this.firestore.collection<IProductos>('productos').valueChanges();
    // <- Returns an Observable of document data. All Snapshot metadata is stripped. This method provides only the data.
  }
  create(data) {
    return this.firestore.collection('productos').add(data);
  }
  update(data) {
    return this.firestore
      .collection('productos')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }
  delete(data) {
    return this.firestore
      .collection('productos')
      .doc(data.payload.doc.id)
      .delete();
  }
}
