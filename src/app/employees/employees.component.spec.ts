import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesComponent } from './employees.component';
import { EmployeeFacade } from '../store/facade/employee.facade';
import { MockEmployeeFacade } from '../store/facade/employee.facade.mock';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, Input } from '@angular/core';
import { Employee } from '../store/models/employee.model';
import { loadEmployees } from '../store/actions/employee.actions';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  const employeeFacadeStub: EmployeeFacade = jasmine.createSpyObj(
    EmployeeFacade,
    { locationChecked: (chekced: boolean) => {}, loadEmployees: () => {} }
  );
  beforeEach(async () => {
    @Component({
      selector: 'app-employee',
      template: '<p>Mock  Component</p>',
    })
    class MockemployeeComponent {
      @Input() employee!: Employee;
      @Input() index!: number;
    }
    await TestBed.configureTestingModule({
      imports: [MatCheckboxModule, MatToolbarModule],
      declarations: [EmployeesComponent, MockemployeeComponent],
      providers: [
        {
          provide: EmployeeFacade,
          useValue: employeeFacadeStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set location filter', () => {
    component.locationChecked(true);
    expect(employeeFacadeStub.locationChecked).toHaveBeenCalledWith(true);
  });
});
