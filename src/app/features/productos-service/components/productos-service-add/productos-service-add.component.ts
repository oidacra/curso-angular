import { IProductos } from './../../../productos/models/productos';
import { Router } from '@angular/router';
import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos-service-add',
  templateUrl: './productos-service-add.component.html',
  styleUrls: ['./productos-service-add.component.scss'],
})
export class ProductosServiceAddComponent implements OnInit {
  public form: FormGroup;
  control: FormControl;
  tmp$: Observable<IProductos[]>;
  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.control = new FormControl('control');
    this.form = this.formBuilder.group({
      sku: ['', [Validators.required, Validators.minLength(4)]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      brand: ['', Validators.required],
      category: '',
      price: ['', Validators.required],
      stock: ['', Validators.required],
      image: '',
    });
  }
  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!');
      this.productosService.add(this.form.value);
      this.router.navigate(['/productos-service']);
      this.tmp$ = this.productosService.productos;
      this.form.disable();
    }
  }
  resetForm() {
    this.form.reset();
  }
}
