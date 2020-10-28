import { AuthService } from './../../core/services/auth.service';
import { User } from 'firebase';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  template: ` <mat-toolbar color="primary">
    <span>Curso de Aplicaciones web con Angular</span>
    <span class="example-spacer"></span>

    <div *ngIf="user; else noLogin">
      <button mat-button>{{ user?.displayName }}</button>
      <button mat-button (click)="logOut()">Cerrar sesión</button>
    </div>

    <ng-template #noLogin>
      <button
        [routerLink]="['/examples/login']"
        mat-flat-button
        color="accent"
        aria-label="Example icon-button with menu icon"
      >
        Iniciar Sesión
      </button>
    </ng-template>

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
        flex-grow: 1;
      }
    `,
  ],
})
export class TopbarComponent {
  @Input()
  user: User;
  @Output()
  toggleButton = new EventEmitter<boolean>();
  constructor(private authService: AuthService) {}
  toggleDrawer() {
    this.toggleButton.emit(true);
  }

  logOut() {
    this.authService.logout();
  }
}
