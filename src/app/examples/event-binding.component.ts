import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h1>Event bindings</h1>

    <button (click)="onSave($event)">Save</button>
  `,
})
export class EventBindingComponent {
  onSave($event) {
    console.log($event);
    alert('Botón presionado!!!');
  }
}
