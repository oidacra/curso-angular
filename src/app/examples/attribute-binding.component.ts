import { Component } from '@angular/core';

@Component({
  selector: 'attribute-binding',
  template: `
    <h1>Attribute Binding</h1>

    <table>
      <tr>
        <td>Columna 1</td>
        <td>Columna 2</td>
      </tr>
      <tr>
        <td [attr.colspan]="colSpan">{{ text }}</td>
      </tr>
    </table>
  `,
})
export class AttributeBindingComponent {
  text = 'Contenido de TD';
  colSpan = 2;
}
