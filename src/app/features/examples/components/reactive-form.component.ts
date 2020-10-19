import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
    <div
      class="reactive-form-container"
      fxLayout="column"
      fxFlex="30"
      fxLayoutAlign="center stretch"
    >
      <h1>Inicio de sesión</h1>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="fill">
          <mat-label>Correo</mat-label>
          <input
            id="email"
            type="email"
            matInput
            formControlName="email"
            placeholder="user@email.com"
            autocomplete="off"
          />
          <mat-error *ngIf="form.get('email').hasError('required')"
            >Campo requerido</mat-error
          >
          <mat-error *ngIf="form.get('email').hasError('email')"
            >Ingrese correo válido</mat-error
          >
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Contraseña</mat-label>
          <input
            id="password"
            matInput
            type="password"
            autocomplete="off"
            formControlName="password"
          />
          <mat-error *ngIf="password.hasError('required')"
            >Ingrese un password</mat-error
          >
        </mat-form-field>

        <div class="actions">
          <button mat-stroked-button color="accent" (click)="resetForm()">
            Limpiar
          </button>
          <button mat-flat-button color="primary" [disabled]="!form.valid">
            Iniciar sesión
          </button>
        </div>
      </form>

      <!-- <p>¿Dirty?: {{ form.dirty }}</p>
      <p>Pristine?: {{ form.pristine }}</p>
      <p>¿Touched?: {{ form.touched }}</p>
      <p>¿Invalid?: {{ form.invalid }}</p>
      <p>Valid?: {{ form.valid }}</p>
      <pre>
        {{ form.value | json }}

      </pre
      > -->
    </div>
  `,
  styles: [
    `
      :host {
        justify-content: center;
        align-items: center;

        padding-top: 150px;
      }
      .reactive-form-container {
        align-items: center;
      }
      .actions {
        justify-content: flex-end;
        display: flex;
      }
      .actions button {
        margin: 8px 8px 8px 0;
      }
      mat-form-field {
        width: 100%;
      }
    `,
  ],
})
export class ReactiveFormComponent implements OnInit {
  // Creación de property para el Group principal del form
  form: FormGroup;
  // Inyectamos FormBuilder que es un servicio para crear forms.
  constructor(private fb: FormBuilder) {}

  // obtener una property del class por getter
  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  ngOnInit(): void {
    // Podemos crear el form de distintas formas
    this.createForm();
  }

  createForm() {
    // Es la forma mas comun de crear forms con el formbuilder
    // tambien podemos crearlos con FormControl, FormGroup
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Podemos utilizar validaciones build-in o hacer las propias
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.warn(this.form.value);
    if (this.form.valid) {
      console.warn(this.form.value);
      // Envío data al servicio y espero si valida o no
      // Si valida hago redirect
      // si no, muestro un mensaje de error al usuario
    }
  }

  // Método de reset del formulario
  resetForm() {
    this.form.reset('');

    // Fix reset show mat-error
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    });
  }
}
