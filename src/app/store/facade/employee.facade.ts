import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { EmployeeState } from '../reducer/employee.reducer';
import * as EmployeeActions from '../actions/employee.actions';
import * as EmployeeSelectors from '../selectors/employee.selector';
import { Filter } from '../models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFacade {
  employees$: Observable<Employee[]>;
  employeeCount$: Observable<number>;
  employeeFilters$: Observable<Filter>;
  employeeLocationFilter$: Observable<string>;
  employeeTeamFilter$: Observable<string>;

  constructor(private store: Store<{ employees: EmployeeState }>) {
    this.employees$ = this.store.pipe(
      select(EmployeeSelectors.selectAllEmployees)
    );
    this.employeeCount$ = this.store.pipe(
      select(EmployeeSelectors.selectEmployeeCount)
    );
    this.employeeFilters$ = this.store.pipe(
      select(EmployeeSelectors.selectFilters)
    );

    this.employeeLocationFilter$ = this.store.pipe(
      select(EmployeeSelectors.selectLocationFilter)
    );
    this.employeeTeamFilter$ = this.store.pipe(
      select(EmployeeSelectors.selectTeamFilter)
    );
  }

  loadEmployees(): void {
    this.store.dispatch(EmployeeActions.loadEmployees());
  }

  updateEmployeeRating(rating: number, index: number): void {
    this.store.dispatch(
      EmployeeActions.updateEmployeeRating({ rating, index })
    );
  }

  applyFIlters(filters: Filter): void {
    this.store.dispatch(EmployeeActions.applyFilters({ filters }));
  }

  resetFilters(): void {
    this.store.dispatch(EmployeeActions.resetFilters());
  }

  locationChecked(checked: boolean): void {
    this.store.dispatch(EmployeeActions.locationChecked({ checked }));
  }
  teamSelected(team: string): void {
    this.store.dispatch(EmployeeActions.teamSelected({ team }));
  }
}
