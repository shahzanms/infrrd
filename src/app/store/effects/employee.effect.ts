import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { EmployeeService } from '../services/employee.service';
import * as EmployeeActions from '../actions/employee.actions';
import * as EmployeeSelectors from '../selectors/employee.selector';
import { EmployeeState } from '../reducer/employee.reducer';
import { select, Store } from '@ngrx/store';

@Injectable()
export class EmployeeEffects {
  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        EmployeeActions.loadEmployees,
        EmployeeActions.applyFilters,
        EmployeeActions.resetFilters,
        EmployeeActions.locationChecked,
        EmployeeActions.teamSelected
      ),
      withLatestFrom(this.store.pipe(select(EmployeeSelectors.selectFilters))),
      mergeMap(([action, filters]) =>
        this.employeeService
          .getEmployees(filters)
          .pipe(
            map((employees) =>
              EmployeeActions.loadEmployeesSuccess({ employees })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
    private store: Store<EmployeeState>
  ) {}
}
