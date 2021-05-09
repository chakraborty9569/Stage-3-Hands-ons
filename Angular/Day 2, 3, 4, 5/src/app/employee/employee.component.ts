import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  id = '3';
  name = 'John';
  salary = 10000;
  permanent = true;
  department = {id: '1', name: 'Payroll'};
  skills = [{id: '1', name: 'HTML'}, {id: '2', name: 'CSS'}, {id: '3', name: 'JavaScript'}];
  dateOfBirth = new Date('12/31/2000');

}
