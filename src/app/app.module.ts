import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './layout/topbar/topbar.component';

import { RouterModule } from '@angular/router';

import { PropertyBindingComponent } from './examples/property-binding.component';
import { AttributeBindingComponent } from './examples/attribute-binding.component';
import { NotFoundComponent } from './components/not-found.component';
import { ClassBindingComponent } from './examples/class-binding.component';
import { StyleBindingComponent } from './examples/style-binding.component';
import { EventBindingComponent } from './examples/event-binding.component';
import { EventFilteringComponent } from './examples/event-filtering.component';
import { TemplateVariableComponent } from './examples/template-variable.component';
import { TwoWayBindingComponent } from './examples/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './examples/pipes.component';
import { WelcomeComponent } from './components/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,

    PropertyBindingComponent,
    AttributeBindingComponent,
    NotFoundComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TemplateVariableComponent,
    TwoWayBindingComponent,
    PipesComponent,
    WelcomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, FormsModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
