import { MenuComponent } from './core/components/menu.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { WelcomeComponent } from './components/welcome.component';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ProductosService } from './features/productos-service/services/productos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopbarComponent,
    WelcomeComponent,
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    // Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  //providers: [ProductosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
