import { Component, OnInit } from '@angular/core';
import { EmployeeFacade } from '../store/facade/employee.facade';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent implements OnInit {
  constructor(public employeeFacade: EmployeeFacade) {}
  ngOnInit(): void {
    this.employeeFacade.loadEmployees();
  }

  locationChecked(checked: boolean) {
    this.employeeFacade.locationChecked(checked);
  }
}
