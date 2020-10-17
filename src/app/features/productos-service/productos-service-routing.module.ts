import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosServiceComponent } from './productos-service.component';

const routes: Routes = [{ path: '', component: ProductosServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosServiceRoutingModule { }
