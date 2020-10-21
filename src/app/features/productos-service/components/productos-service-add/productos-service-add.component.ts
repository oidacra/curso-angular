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
  public formGrup: FormGroup; // <- agrupa controles

  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formGrup = this.formBuilder.group({
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
    if (this.formGrup.valid) {
      this.formGrup.disable();
      console.log('Form Submitted!');
      this.productosService.add(this.formGrup.value);
      // Redirect a modulo
      this.router.navigate(['/productos-service']);
    }
  }
  resetForm() {
    this.formGrup.reset();
  }
}
