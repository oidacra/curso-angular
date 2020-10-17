import { NgModule } from '@angular/core';

import { ExamplesRoutingModule } from './examples-routing.module';
import { SharedModule } from './../../shared/shared.module';

// Componentes
import { PropertyBindingComponent } from './components/property-binding.component';
import { AttributeBindingComponent } from './components/attribute-binding.component';
import { ClassBindingComponent } from './components/class-binding.component';
import { StyleBindingComponent } from './components/style-binding.component';
import { EventBindingComponent } from './components/event-binding.component';
import { EventFilteringComponent } from './components/event-filtering.component';
import { TemplateVariableComponent } from './components/template-variable.component';
import { TwoWayBindingComponent } from './components/two-way-binding.component';
import { PipesComponent } from './components/pipes.component';
import { ReferenciaComponent } from './components/referencia/referencia.component';
import { ReferenciaHijo1Component } from './components/referencia/referencia-hijo1.component';
import { ReferenciaHijo2Component } from './components/referencia/referencia-hijo2.component';

@NgModule({
  declarations: [
    PropertyBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TemplateVariableComponent,
    TwoWayBindingComponent,
    PipesComponent,
    ReferenciaComponent,
    ReferenciaHijo1Component,
    ReferenciaHijo2Component,
  ],
  imports: [SharedModule, ExamplesRoutingModule],
})
export class ExamplesModule {}
