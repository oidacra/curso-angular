import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <h1>Two way binding</h1>
    <label>Email One Way</label>
    <input
      #emailVariable
      [value]="email"
      (keyup.enter)="onKeyUp(emailVariable.value)"
    />

    <br />
    <label>Email Two-Way</label>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `,
  styles: [],
})
export class TwoWayBindingComponent {
  email = 'me@example.com';
  onKeyUp(email?: string) {
    console.log(this.email);
  }
}
