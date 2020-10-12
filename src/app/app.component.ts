import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularCourseRouting';

  @ViewChild('drawer') public drawer: MatDrawer;

  drawerToggle($event) {
    this.drawer.toggle();
  }
}
