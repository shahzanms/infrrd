import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable, of, throwError } from 'rxjs';
import { EmployeeEffects } from './employee.effect';
import { EmployeeService } from '../services/employee.service';
import * as EmployeeActions from '../actions/employee.actions';
import * as EmployeeSelectors from '../selectors/employee.selector';
import { EmployeeState } from '../reducer/employee.reducer';
import { Filter } from '../models/filter.model';
import { Employee } from '../models/employee.model';

describe('EmployeeEffects', () => {
  let actions$: Observable<any>;
  let effects: EmployeeEffects;
  let employeeService: jasmine.SpyObj<EmployeeService>;
  let store: MockStore<EmployeeState>;

  beforeEach(() => {
    const employeeServiceSpy = jasmine.createSpyObj('EmployeeService', [
      'getEmployees',
    ]);
    TestBed.configureTestingModule({
      providers: [
        EmployeeEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        { provide: EmployeeService, useValue: employeeServiceSpy },
      ],
    });

    effects = TestBed.inject(EmployeeEffects);
    employeeService = TestBed.inject(
      EmployeeService
    ) as jasmine.SpyObj<EmployeeService>;
    store = TestBed.inject(MockStore);
  });
  describe('employeeEffect', () => {
    const filters: Filter = {
      department: '',
      roleType: '',
      designation: '',
      experience: '',
      yearOfJoining: '',
      location: '',
      team: '',
    };
    const employees: Employee[] = [
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
    it('should load employees successfully', () => {
      const action = EmployeeActions.loadEmployees();
      const completion = EmployeeActions.loadEmployeesSuccess({ employees });

      actions$ = of(action);
      store.overrideSelector(EmployeeSelectors.selectFilters, filters);
      employeeService.getEmployees.and.returnValue(of(employees));

      effects.loadEmployees$.subscribe((result) => {
        expect(result).toEqual(completion);
      });
    });
  });
});
