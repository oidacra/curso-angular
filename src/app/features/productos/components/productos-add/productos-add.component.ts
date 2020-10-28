import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Producto } from './../../model/producto.model';
import { ProductosService } from './../../services/productos.service';

@Component({
  selector: 'app-productos-add',
  templateUrl: './productos-add.component.html',
  styleUrls: ['./productos-add.component.scss'],
})
export class ProductosAddComponent implements OnInit {
  public form: FormGroup;
  control: FormControl;
  editMode = false;

  constructor(
    public dialogRef: MatDialogRef<ProductosAddComponent>,
    private formBuilder: FormBuilder,
    private Productos: ProductosService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public dataForm: Producto // <- Inyecto un token
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.control = new FormControl('control');
    this.form = this.formBuilder.group({
      id: [],
      sku: ['', [Validators.required, Validators.minLength(4)]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      brand: ['', Validators.required],
      category: '',
      price: ['', Validators.required],
      stock: ['', Validators.required],
      image: '',
    });

    if (this.dataForm) {
      this.form.patchValue(this.dataForm); // Si tengo la data de esta manera cargo toda la información a un formulario
      this.editMode = true;
    }
  }
  onSubmit() {
    if (this.form.valid) {
      if (this.editMode) {
        this.Productos.updateProduct(this.form.value)
          .then(() => this.__handleSuccess('Producto editado exitosamente'))
          .catch(() => this.__handleError());
      } else {
        this.Productos.addProduct(this.form.value)
          .then(() => this.__handleSuccess('Producto guardado exitosamente'))
          .catch(() => this.__handleError());
      }
      this.form.disable();
    }
  }
  resetForm() {
    this.form.reset();
    this.form.enable();
  }
  //TODO: Esto se puede crear un class y se hereda para no estar creando esto en cada componente (Extends)
  private __handleError() {
    this._snackBar.open('Error guardando', 'Cerrar', {
      duration: 2000,
    });
    this.form.enable();
  }
  private __handleSuccess(msg: string) {
    this.dialogRef.close();
    this._snackBar.open(msg, 'Cerrar', {
      duration: 2000,
    });
  }
}
