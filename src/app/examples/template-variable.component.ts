import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  template: `
    <h1>Event Filtering</h1>

    <label>Email</label>
    <input #email (keyup.enter)="onKeyUp(email.value)" /> <br />
  `,
})
export class TemplateVariableComponent {
  onKeyUp(email: string) {
    console.log(email);
  }
}
