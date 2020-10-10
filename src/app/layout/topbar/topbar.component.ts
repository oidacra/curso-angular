import { Component } from '@angular/core';

interface IMenu {
  name: string;
  path: string;
  icon?: string;
}

@Component({
  selector: 'app-topbar',
  template: ` <h1>Menu</h1>
    <ul>
      <li *ngFor="let url of mainMenu">
        <a [routerLink]="url.path">{{ url.name }}</a>
      </li>
    </ul>`,
})
export class TopbarComponent {
  mainMenu: IMenu[] = [
    { name: 'Inicio', path: '' },
    { name: 'Property Binding', path: 'examples/property-binding' },
    { name: 'Attribute Binding', path: 'examples/attibute-binding' },
    { name: 'Class Binding', path: 'examples/class-binding' },
    { name: 'Style Binding', path: 'examples/style-binding' },
    { name: 'Event Binding', path: 'examples/event-binding' },
    { name: 'Event filtering', path: 'examples/event-filtering' },
    { name: 'Template variable', path: 'examples/template-variable' },
    { name: 'Two way', path: 'examples/two-way-binding' },
    { name: 'Pipes', path: 'examples/pipes' },
  ];
}
