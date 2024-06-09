import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { EmployeeFacade } from './employee.facade';
import * as EmployeeActions from '../actions/employee.actions';
import { EmployeeState } from '../reducer/employee.reducer';
import { Filter } from '../models/filter.model';
import { Employee } from '../models/employee.model';

describe('EmployeeFacade', () => {
  let facade: EmployeeFacade;
  let store: MockStore<EmployeeState>;
  let dispatchSpy: jasmine.Spy;

  const initialState: EmployeeState = {
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeFacade, provideMockStore({ initialState })],
    });

    facade = TestBed.inject(EmployeeFacade);
    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should dispatch loadEmployees action', () => {
    facade.loadEmployees();
    expect(dispatchSpy).toHaveBeenCalledWith(EmployeeActions.loadEmployees());
  });

  it('should dispatch updateEmployeeRating action', () => {
    const rating = 5;
    const index = 0;
    const expectedAction = EmployeeActions.updateEmployeeRating({
      rating,
      index,
    });
    facade.updateEmployeeRating(rating, index);
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });

  it('should dispatch applyFilters action', () => {
    const expectedAction = EmployeeActions.applyFilters({
      filters: dummyFilters,
    });
    facade.applyFIlters(dummyFilters);
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });

  it('should dispatch resetFilters action', () => {
    facade.resetFilters();
    expect(dispatchSpy).toHaveBeenCalledWith(EmployeeActions.resetFilters());
  });

  it('should dispatch locationChecked action', () => {
    const checked = true;
    const expectedAction = EmployeeActions.locationChecked({ checked });
    facade.locationChecked(checked);
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });

  it('should dispatch teamSelected action', () => {
    const team = 'stark';
    const expectedAction = EmployeeActions.teamSelected({ team });
    facade.teamSelected(team);
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });
});
