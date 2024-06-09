import { createAction, props } from '@ngrx/store';
import { Employee } from '../models/employee.model';
import { Filter } from '../models/filter.model';

export const loadEmployees = createAction('[Employee] Load Employees');

export const loadEmployeesSuccess = createAction(
  '[Employee] Load Employees Success',
  props<{ employees: Employee[] }>()
);

export const updateEmployeeRating = createAction(
  '[Employee] Update Employees Rating',
  props<{ rating: number; index: number }>()
);

export const applyFilters = createAction(
  '[Employee] Apply Employees filter',
  props<{ filters: Filter }>()
);

export const locationChecked = createAction(
  '[Employee] Apply Employees Location filter',
  props<{ checked: boolean }>()
);

export const teamSelected = createAction(
  '[Employee] Apply Employees Team filter',
  props<{ team: string }>()
);

export const resetFilters = createAction('[Employee] Reset Employees filter');
