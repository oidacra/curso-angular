import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-productos-service-add',
  templateUrl: './productos-service-add.component.html',
  styleUrls: ['./productos-service-add.component.scss'],
})
export class ProductosServiceAddComponent implements OnInit {
  public form: FormGroup;
  control: FormControl;
  tmp$ = this.productosService.productsWithAdd$;
  constructor(
    public dialogRef: MatDialogRef<ProductosServiceAddComponent>,
    private formBuilder: FormBuilder,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.control = new FormControl('control');
    this.form = this.formBuilder.group({
      sku: ['1222', [Validators.required, Validators.minLength(4)]],
      name: ['Iphone 12', [Validators.required, Validators.minLength(4)]],
      brand: ['Apple', Validators.required],
      category: 'Celulares',
      price: ['1110', Validators.required],
      stock: ['2', Validators.required],
      image: '',
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this.productosService.add(this.form.value);
      this.dialogRef.close();
      this.form.disable();
    }
  }
  resetForm() {
    this.form.reset();
    this.form.enable();
  }
}
