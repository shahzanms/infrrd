import { Injectable } from '@angular/core';
import { dummyEmployees } from '../data/data';
import { Observable, of } from 'rxjs';
import { Filter } from '../models/filter.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployees(filter: Filter): Observable<Employee[]> {
    const filteredEmployees = dummyEmployees.filter((employee) => {
      return (
        (filter.department
          ? employee.department === filter.department
          : true) &&
        (filter.roleType ? employee.roleType === filter.roleType : true) &&
        (filter.designation
          ? employee.designation === filter.designation
          : true) &&
        (filter.experience
          ? employee.experience === filter.experience
          : true) &&
        (filter.yearOfJoining
          ? employee.yearOfJoining === filter.yearOfJoining
          : true) &&
        (filter.location ? employee.location === filter.location : true) &&
        (filter.team ? employee.team === filter.team : true)
      );
    });
    return of(filteredEmployees);
  }
}
