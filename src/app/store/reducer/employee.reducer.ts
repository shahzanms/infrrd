import { createReducer, on } from '@ngrx/store';
import { Employee } from '../models/employee.model';
import * as EmployeeActions from '../actions/employee.actions';
import { Filter } from '../models/filter.model';

export interface EmployeeState {
  employees: Employee[];
  filters: Filter;
}

export const initialState: EmployeeState = {
  employees: [],
  filters: {
    department: '',
    roleType: '',
    designation: '',
    experience: '',
    yearOfJoining: '',
    location: '',
    team: '',
  },
};

export const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees,
  })),
  on(EmployeeActions.applyFilters, (state, { filters }) => ({
    ...state,
    filters,
  })),

  on(EmployeeActions.resetFilters, (state) => ({
    ...state,
    filters: {
      department: '',
      roleType: '',
      designation: '',
      experience: '',
      yearOfJoining: '',
      location: '',
      team: '',
    },
  })),
  on(EmployeeActions.locationChecked, (state, { checked }) => ({
    ...state,
    filters: { ...state.filters, location: checked ? 'bangalore' : '' },
  })),
  on(EmployeeActions.teamSelected, (state, { team }) => ({
    ...state,
    filters: { ...state.filters, team },
  })),
  on(EmployeeActions.updateEmployeeRating, (state, { rating, index }) => {
    const updatedEmployees = state.employees.map((employee, i) =>
      i === index ? { ...employee, rating: rating } : employee
    );
    return {
      ...state,
      employees: updatedEmployees,
    };
  })
);
