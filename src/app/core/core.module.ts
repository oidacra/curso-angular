<<<<<<< HEAD
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [BrowserModule],
  exports: [BrowserModule],
=======
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

const CORE_MODULES = [
  FlexLayoutModule,
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
];
@NgModule({
  declarations: [],
  imports: [CORE_MODULES],
  exports: [CORE_MODULES],
>>>>>>> material
})
export class CoreModule {}
