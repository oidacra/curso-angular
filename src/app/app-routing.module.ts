import { WelcomeComponent } from './components/welcome.component';

import { NotFoundComponent } from './components/not-found.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: WelcomeComponent },

  // Cargar módulo LazyLoad
  {
    path: 'examples',

    loadChildren: () =>
      import('./features/examples/examples.module').then(
        (m) => m.ExamplesModule
      ),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
