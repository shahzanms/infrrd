import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeFacade } from '../store/facade/employee.facade';
import { formControlNames, options } from '../store/data/data';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  form: FormGroup;
  formControlNames: string[] = formControlNames;
  options: { [key: string]: { value: string; viewValue: string }[] } = options;

  constructor(private fb: FormBuilder, private employeefacade: EmployeeFacade) {
    this.form = this.fb.group({
      department: [''],
      roleType: [''],
      designation: [''],
      experience: [''],
      yearOfJoining: [''],
      location: [''],
      team: [''],
    });
  }

  ngOnInit(): void {
    this.employeefacade.employeeLocationFilter$.subscribe(
      (location: string) => {
        this.form.patchValue({ location });
      }
    );
    this.employeefacade.employeeTeamFilter$.subscribe((team: string) => {
      this.form.patchValue({ team });
    });
  }
  onSubmit() {
    this.employeefacade.applyFIlters(this.form.value);
  }

  onCancel() {
    this.form.reset();
    this.employeefacade.resetFilters();
  }
}
