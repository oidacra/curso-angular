import { ProductosService } from './services/productos.service';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosAddComponent } from './components/productos-add/productos-add.component';
import { ProductosDetalleComponent } from './components/productos-detalle/productos-detalle.component';
import { ProductosListadoComponent } from './components/productos-listado/productos-listado.component';
import { ProductosComponent } from './productos.component';

@NgModule({
  declarations: [
    ProductosComponent,
    ProductosListadoComponent,
    ProductosDetalleComponent,
    ProductosAddComponent,
  ],
  imports: [SharedModule, ProductosRoutingModule],
  providers: [ProductosService],
})
export class ProductosModule {}
