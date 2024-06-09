import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from '../reducer/employee.reducer';

export const selectEmployeeState =
  createFeatureSelector<EmployeeState>('employees');

export const selectAllEmployees = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.employees
);

export const selectFilters = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.filters
);
export const selectLocationFilter = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.filters.location
);

export const selectTeamFilter = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.filters.team
);

export const selectEmployeeCount = createSelector(
  selectAllEmployees,
  (employees) => employees.length
);
