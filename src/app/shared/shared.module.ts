import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IsAuthorizedDirective } from '../commons/directives/access-control.directive';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  FlexLayoutModule,

  // Material
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,

  MatFormFieldModule,
  MatInputModule,

  MatDialogModule,
  MatSnackBarModule,
];
@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES],
})
export class SharedModule {}
