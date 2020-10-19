import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  template: `
    <label>Nombre:</label>
    <input
      id="name"
      name="name"
      type="text"
      [(ngModel)]="username"
      required
      minlength="4"
      #name="ngModel"
      autocomplete="off"
    />

    <div *ngIf="name.invalid && (name.dirty || name.touched)">
      <div *ngIf="name.errors.required">Nombre es requerido.</div>
      <div *ngIf="name.errors.minlength">
        El nombre debe contener almenos de 4 carácteres.
      </div>
    </div>
    <p>Value del input: {{ username }}</p>

    <p>¿Dirty?: {{ name.dirty }}</p>
    <p>¿Touched?: {{ name.touched }}</p>
    <p>¿Invalid?: {{ name.invalid }}</p>

    <button [disabled]="name.invalid" (click)="onSubmit()">
      Enviar Formulario
    </button>
    <br />
    <br />
    <button (click)="changeValueInput()">Cambiar desde componente</button>
  `,
  styles: [
    `
      .ng-invalid {
        border: 1px solid red;
      }
      .ng-untouched.ng-pristine {
        border: 1px solid rgb(118, 118, 118);
      }
    `,
  ],
})
export class TemplateDrivenComponent {
  username;

  changeValueInput() {
    console.log(this.username);
    this.username = 'asdadasdad';
  }

  onSubmit() {
    alert('Formulario enviado');
  }
}
