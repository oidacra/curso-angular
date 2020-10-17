import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referencia',
  template: `
    <div class="referencia-page" fxLayout="column">
      <h1>Ejemplo de Componente referenciado</h1>
      <p>
        Ejemplo vemos como se comunican 2 componentes referenciado uno de ellos
      </p>
      <div fxLayout="row">
        <app-referencia-hijo1
          #hijo1Component
          fxFlex="20"
        ></app-referencia-hijo1>

        <app-referencia-hijo2
          [hijo1Component]="hijo1Component"
          fxFlex
        ></app-referencia-hijo2>
      </div>
    </div>
  `,
})
export class ReferenciaComponent {}
