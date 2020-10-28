import { ProductosAddComponent } from './components/productos-add/productos-add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'add', component: ProductosAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
