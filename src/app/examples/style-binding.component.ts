import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h1>Style Binding</h1>

    <button [style.backgroundColor]="isActive ? 'blue' : 'red'">Save</button>
  `,
})
export class StyleBindingComponent {
  isActive = false;
}
