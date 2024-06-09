import { Component, Input } from '@angular/core';
import { Employee } from '../store/models/employee.model';
import { EmployeeFacade } from '../store/facade/employee.facade';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
 @Input() employee!:Employee;
 @Input() index!:number;

  rate(stars: number) {
    let rating=this.employee.rating;
    if (this.employee.rating === stars) {
      rating -= 0.5;
    } else if (this.employee.rating === stars-0.5) {
      rating =stars;
    } 
    else if (this.employee.rating === stars+0.5) {
      rating =stars;
    } else {
      rating = stars-0.5;
    }
    this.employeeFacade.updateEmployeeRating(rating,this.index)
  }

  constructor(private employeeFacade: EmployeeFacade){}
}
