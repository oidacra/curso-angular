import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { WelcomeComponent } from './components/welcome.component';

@NgModule({
  declarations: [AppComponent, TopbarComponent, WelcomeComponent],
  imports: [CoreModule, AppRoutingModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
