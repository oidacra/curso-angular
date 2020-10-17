import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referencia-hijo1',
  template: `
    <h2>Componente Hijo 1</h2>
    Valor de propertyHijo1 = {{ propertyHijo1 }}
  `,
  styles: [],
})
export class ReferenciaHijo1Component {
  public propertyHijo1 = 'Contenido de Hijo 1';
}
