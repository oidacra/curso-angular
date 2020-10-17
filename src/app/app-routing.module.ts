import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome.component';

import { NotFoundComponent } from './components/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  // Lazy Load de Módulo
  {
    path: 'examples',
    loadChildren: () =>
      import('./features/examples/examples.module').then(
        (m) => m.ExamplesModule
      ),
  },
  { path: 'inicio', component: WelcomeComponent },
  {
    path: 'productos',
    loadChildren: () =>
      import('./features/productos/productos.module').then(
        (m) => m.ProductosModule
      ),
  },
  { path: 'productos-service', loadChildren: () => import('./features/productos-service/productos-service.module').then(m => m.ProductosServiceModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
