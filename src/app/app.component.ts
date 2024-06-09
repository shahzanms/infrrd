import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { options } from './store/data/data';
import { EmployeeFacade } from './store/facade/employee.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('subnav') subnav!: MatSidenav;
  isSubnavOpen: boolean = false;

  toggleSubMenu() {
    this.subnav.toggle();
    this.isSubnavOpen = !this.isSubnavOpen;
  }

  closeSubMenu() {
    this.subnav.close();
    this.isSubnavOpen = false;
  }

  setTeamFilter(team: string) {
    this.employeeFacade.teamSelected(team);
  }

  title = 'assignmentInf';
  teams = options['team'];

  constructor(public employeeFacade: EmployeeFacade) {}
}
