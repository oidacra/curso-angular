import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-productos-service-add',
  templateUrl: './productos-service-add.component.html',
  styleUrls: ['./productos-service-add.component.scss'],
})
export class ProductosServiceAddComponent implements OnInit {
  public form: FormGroup;
  control: FormControl;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.control = new FormControl('control');
    this.form = this.formBuilder.group({
      sku: ['', Validators.required, Validators.minLength(4)],
      name: ['', Validators.required, Validators.minLength(4)],
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
      this.form.reset();
    }
  }
  resetForm() {
    this.form.reset();
  }
}
