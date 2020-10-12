import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { NotFoundComponent } from './components/not-found.component';
import { WelcomeComponent } from './components/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NotFoundComponent,
    WelcomeComponent,
  ],
  imports: [CoreModule, AppRoutingModule, RouterModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
