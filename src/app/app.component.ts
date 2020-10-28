import { AuthService } from './core/services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { User } from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularCourseRouting';
  user$ = this.authService.user$;
  constructor(private authService: AuthService) {}

  @ViewChild('drawer') public drawer: MatDrawer;

  drawerToggle($event) {
    this.drawer.toggle();
  }
}
