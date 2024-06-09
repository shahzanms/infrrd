import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { EmployeeFacade } from '../store/facade/employee.facade';
import { MockEmployeeFacade } from '../store/facade/employee.facade.mock';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CapitalizeWordsPipe } from '../pipes/capitalize.pipe';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  const employeeFacadeStub: EmployeeFacade = jasmine.createSpyObj(
    EmployeeFacade,
    { updateEmployeeRating: (rating: number, index: number) => {} }
  );
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDividerModule, MatCardModule, MatIconModule],
      declarations: [EmployeeComponent, CapitalizeWordsPipe],
      providers: [
        {
          provide: EmployeeFacade,
          useValue: employeeFacadeStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;

    component.employee = {
      name: 'Alice Johnson',
      department: 'ui',
      roleType: 'fullTime',
      designation: 'developer',
      experience: '2',
      yearOfJoining: '2023',
      location: 'bangalore',
      team: 'maverick',
      reportingManager: 'John Doe',
      rating: 2,
      phone: '1234567890',
      email: 'alice.johnson@comp.co',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should rate employee', () => {
    component.index = 1;
    component.rate(3);
    fixture.detectChanges();

    expect(employeeFacadeStub.updateEmployeeRating).toHaveBeenCalledWith(
      2.5,
      1
    );
  });
});
