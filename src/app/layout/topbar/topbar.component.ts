import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  template: ` <mat-toolbar color="primary">
    <span>Curso de Aplicaciones web con Angular</span>
    <span class="example-spacer"></span>

    <button
      (click)="toggleDrawer()"
      mat-icon-button
      class="example-icon"
      aria-label="Example icon-button with menu icon"
    >
      <mat-icon>menu</mat-icon>
    </button>
  </mat-toolbar>`,
  styles: [
    `
      .example-spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class TopbarComponent {
  @Output()
  toggleButton = new EventEmitter<boolean>();

  toggleDrawer() {
    this.toggleButton.emit(true);
    console.log('emit');
  }
}
