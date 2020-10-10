import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h1>Class Binding</h1>
    <button class="btn" [class.redClass]="isActive">Save</button>
  `,
  styles: [
    `
      .redClass {
        background-color: red;
      }
    `,
  ],
})
export class ClassBindingComponent {
  isActive = true;
}
