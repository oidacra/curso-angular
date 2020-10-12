import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { AttributeBindingComponent } from './components/attribute-binding.component';
import { PropertyBindingComponent } from './components/property-binding.component';
import { EventBindingComponent } from './components/event-binding.component';
import { ClassBindingComponent } from './components/class-binding.component';
import { StyleBindingComponent } from './components/style-binding.component';
import { EventFilteringComponent } from './components/event-filtering.component';
import { TwoWayBindingComponent } from './components/two-way-binding.component';
import { TemplateVariableComponent } from './components/template-variable.component';
import { PipesComponent } from './components/pipes.component';

const routes: Routes = [
  {
    path: 'property-binding',
    component: PropertyBindingComponent,
  },
  {
    path: 'attibute-binding',
    component: AttributeBindingComponent,
  },
  {
    path: 'class-binding',
    component: ClassBindingComponent,
  },
  {
    path: 'style-binding',
    component: StyleBindingComponent,
  },
  {
    path: 'event-binding',
    component: EventBindingComponent,
  },
  {
    path: 'event-filtering',
    component: EventFilteringComponent,
  },
  {
    path: 'template-variable',
    component: TemplateVariableComponent,
  },
  {
    path: 'two-way-binding',
    component: TwoWayBindingComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
