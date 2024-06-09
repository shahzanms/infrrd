import {
  employeeReducer,
  EmployeeState,
  initialState,
} from './employee.reducer';
import * as EmployeeActions from '../actions/employee.actions';
import { Employee } from '../models/employee.model';
import { Filter } from '../models/filter.model';

describe('Employee Reducer', () => {
  const dummyEmployees: Employee[] = [
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
  ];

  const dummyFilters: Filter = {
    department: 'ui',
    roleType: 'fullTime',
    designation: 'developer',
    experience: '2',
    yearOfJoining: '2023',
    location: 'bangalore',
    team: 'maverick',
  };

  it('should load employees successfully', () => {
    const action = EmployeeActions.loadEmployeesSuccess({
      employees: dummyEmployees,
    });
    const newState = employeeReducer(initialState, action);
    expect(newState.employees).toEqual(dummyEmployees);
  });

  it('should apply filters successfully', () => {
    const action = EmployeeActions.applyFilters({ filters: dummyFilters });
    const newState = employeeReducer(initialState, action);
    expect(newState.filters).toEqual(dummyFilters);
  });

  it('should reset filters successfully', () => {
    const action = EmployeeActions.resetFilters();
    const newState = employeeReducer(
      { ...initialState, filters: dummyFilters },
      action
    );
    expect(newState.filters).toEqual(initialState.filters);
  });

  it('should update location filter successfully', () => {
    const action = EmployeeActions.locationChecked({ checked: true });
    const newState = employeeReducer(initialState, action);
    expect(newState.filters.location).toEqual('bangalore');
  });

  it('should update team filter successfully', () => {
    const action = EmployeeActions.teamSelected({ team: 'stark' });
    const newState = employeeReducer(initialState, action);
    expect(newState.filters.team).toEqual('stark');
  });

  it('should update employee rating successfully', () => {
    const updatedRating = 5;
    const index = 0;
    const action = EmployeeActions.updateEmployeeRating({
      rating: updatedRating,
      index,
    });
    const stateWithEmployees: EmployeeState = {
      ...initialState,
      employees: dummyEmployees,
    };
    const newState = employeeReducer(stateWithEmployees, action);
    expect(newState.employees[index].rating).toEqual(updatedRating);
  });

  it('should return initial state by default', () => {
    const action = {} as any;
    const newState = employeeReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
