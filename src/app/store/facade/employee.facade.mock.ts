import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';
import { Filter } from '../models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class MockEmployeeFacade {
  employees$: Observable<Employee[]> = of([
    {
      name: 'Alice Johnson',
      department: 'ui',
      roleType: 'fullTime',
      designation: 'developer',
      experience: '2',
      yearOfJoining: '2023',
      location: 'bangalore',
      team: 'maverick',
      reportingManager: 'John Doe',
      rating: 4,
      phone: '1234567890',
      email: 'alice.johnson@comp.co',
    },
  ]);

  employeeCount$: Observable<number> = of(1);
  employeeFilters$: Observable<Filter> = of({
    department: '',
    roleType: '',
    designation: '',
    experience: '',
    yearOfJoining: '',
    location: '',
    team: '',
  });
  employeeLocationFilter$: Observable<string> = of('bangalore');
  employeeTeamFilter$: Observable<string> = of('maverick');

  loadEmployees(): void {}

  updateEmployeeRating(rating: number, index: number): void {}

  applyFilters(filters: Filter): void {}

  resetFilters(): void {}

  locationChecked(checked: boolean): void {}

  teamSelected(team: string): void {}
}
