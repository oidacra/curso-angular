import { ProductosService } from './services/productos.service';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { ProductosServiceRoutingModule } from './productos-service-routing.module';
import { ProductosServiceComponent } from './productos-service.component';
import { ProductosServiceListadoComponent } from './components/productos-service-listado/productos-service-listado.component';
import { ProductosServiceDetalleComponent } from './components/productos-service-detalle/productos-service-detalle.component';
import { ProductosServiceAddComponent } from './components/productos-service-add/productos-service-add.component';

@NgModule({
  declarations: [
    ProductosServiceComponent,
    ProductosServiceListadoComponent,
    ProductosServiceDetalleComponent,
    ProductosServiceAddComponent,
  ],
  imports: [SharedModule, ProductosServiceRoutingModule],
  providers: [ProductosService],
})
export class ProductosServiceModule {}
