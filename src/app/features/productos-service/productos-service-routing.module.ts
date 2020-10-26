import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosServiceComponent } from './productos-service.component';
import { ProductosServiceAddComponent } from './components/productos-service-add/productos-service-add.component';
const routes: Routes = [
  { path: '', component: ProductosServiceComponent },
  { path: 'add', component: ProductosServiceAddComponent }, // Importante que este add antes de :id , sino es considerado add como si fuese un id
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosServiceRoutingModule {}
