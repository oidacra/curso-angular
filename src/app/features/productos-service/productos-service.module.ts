import { ProductosService } from './services/productos.service';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { ProductosServiceRoutingModule } from './productos-service-routing.module';
import { ProductosServiceComponent } from './productos-service.component';
import { ProductosServiceListadoComponent } from './components/productos-service-listado/productos-service-listado.component';
import { ProductosServiceDetalleComponent } from './components/productos-service-detalle/productos-service-detalle.component';
import { ProductosServiceAddComponent } from './components/productos-service-add/productos-service-add.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/features/productos-service/productos-in-memory-data-service';

@NgModule({
  declarations: [
    ProductosServiceComponent,
    ProductosServiceListadoComponent,
    ProductosServiceDetalleComponent,
    ProductosServiceAddComponent,
  ],
  imports: [
    SharedModule,
    ProductosServiceRoutingModule,
    // DB Memoria
    HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService, {
      delay: 1000,
    }),
  ],
  providers: [ProductosService],
})
export class ProductosServiceModule {}
