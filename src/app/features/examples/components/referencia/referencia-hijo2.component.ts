import { Component, Input, OnInit } from '@angular/core';
import { ReferenciaHijo1Component } from './referencia-hijo1.component';

@Component({
  selector: 'app-referencia-hijo2',
  template: `
    <h2>Componente Hijo 2</h2>
    <button (click)="cambiarPropertyHijo1()">Cambiar Hijo 1</button>
  `,
  styles: [],
})
export class ReferenciaHijo2Component {
  @Input()
  hijo1Component: ReferenciaHijo1Component;

  cambiarPropertyHijo1() {
    this.hijo1Component.propertyHijo1 = 'Cambio de titulo desde hijo2';
  }
}
