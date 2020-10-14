import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ProductosListadoComponent } from './components/productos-listado/productos-listado.component';
import { ProductosDetalleComponent } from './components/productos-detalle/productos-detalle.component';

@NgModule({
  declarations: [ProductosComponent, ProductosListadoComponent, ProductosDetalleComponent],
  imports: [SharedModule, ProductosRoutingModule],
})
export class ProductosModule {}
