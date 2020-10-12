<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const MODULES = [FormsModule, CommonModule];

@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES],
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule],
>>>>>>> material
})
export class SharedModule {}
