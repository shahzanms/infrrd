import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getEMployees', () => {
    const emps = service.getEmployees({
      department: 'devops',
      roleType: '',
      designation: 'architect',
      experience: '',
      yearOfJoining: '',
      location: 'hyderabad',
      team: '',
    });
    emps.subscribe((data) => {
      expect(data.length).toEqual(2);
    });
  });
});
