import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  template: `
    <h1>Event Filtering</h1>

    <label>Method 1</label>
    <input (keyup)="onKeyUp($event)" /> <br />

    <label>Method 2</label>
    <input (keyup.enter)="onKeyUpMethod2()" />
  `,
})
export class EventFilteringComponent {
  onKeyUp($event) {
    if ($event.keyCode === 13) console.log('Enter was pressed (Method 1) !!');
  }

  onKeyUpMethod2() {
    console.log('Enter was pressed (Method 2) !!');
  }
}
