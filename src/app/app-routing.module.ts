<<<<<<< HEAD
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

=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome.component';

import { NotFoundComponent } from './components/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  // Lazy Load de Módulo
  {
    path: 'examples',
>>>>>>> material
    loadChildren: () =>
      import('./features/examples/examples.module').then(
        (m) => m.ExamplesModule
      ),
  },
  { path: 'inicio', component: WelcomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
