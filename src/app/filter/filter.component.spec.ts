import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeFacade } from '../store/facade/employee.facade';
import { MockEmployeeFacade } from '../store/facade/employee.facade.mock';
import { CapitalizeWordsPipe } from '../pipes/capitalize.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Filter } from '../store/models/filter.model';
import { of } from 'rxjs';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  const employeeFacadeStub: any = {
    applyFIlters: jasmine.createSpy('applyFIlters'),
    resetFilters: jasmine.createSpy('resetFilters'),
    employeeLocationFilter$: of('bengaluru'),
    employeeTeamFilter$: of('stark'),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
      declarations: [FilterComponent, CapitalizeWordsPipe],
      providers: [
        {
          provide: EmployeeFacade,
          useValue: employeeFacadeStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should applyFIlters', () => {
    component.onSubmit();
    expect(employeeFacadeStub.applyFIlters).toHaveBeenCalled();
  });

  it('should resetFilters', () => {
    component.onCancel();
    expect(employeeFacadeStub.resetFilters).toHaveBeenCalled();
  });

  it('should set filters', () => {
    component.ngOnInit();
    expect(component.form.value).toEqual({
      department: '',
      roleType: '',
      designation: '',
      experience: '',
      yearOfJoining: '',
      location: 'bengaluru',
      team: 'stark',
    });
  });
});
