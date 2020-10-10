import { WelcomeComponent } from './components/welcome.component';
import { PipesComponent } from './examples/pipes.component';
import { TwoWayBindingComponent } from './examples/two-way-binding.component';
import { TemplateVariableComponent } from './examples/template-variable.component';
import { EventFilteringComponent } from './examples/event-filtering.component';
import { StyleBindingComponent } from './examples/style-binding.component';
import { ClassBindingComponent } from './examples/class-binding.component';
import { NotFoundComponent } from './components/not-found.component';
import { PropertyBindingComponent } from './examples/property-binding.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttributeBindingComponent } from './examples/attribute-binding.component';
import { EventBindingComponent } from './examples/event-binding.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: WelcomeComponent },
  // Ejemplos
  {
    path: 'examples/property-binding',
    component: PropertyBindingComponent,
  },
  {
    path: 'examples/attibute-binding',
    component: AttributeBindingComponent,
  },
  {
    path: 'examples/class-binding',
    component: ClassBindingComponent,
  },
  {
    path: 'examples/style-binding',
    component: StyleBindingComponent,
  },
  {
    path: 'examples/event-binding',
    component: EventBindingComponent,
  },
  {
    path: 'examples/event-filtering',
    component: EventFilteringComponent,
  },
  {
    path: 'examples/template-variable',
    component: TemplateVariableComponent,
  },
  {
    path: 'examples/two-way-binding',
    component: TwoWayBindingComponent,
  },
  {
    path: 'examples/pipes',
    component: PipesComponent,
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
