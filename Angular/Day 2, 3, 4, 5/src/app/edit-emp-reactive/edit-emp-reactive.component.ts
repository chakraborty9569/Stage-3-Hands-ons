import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeComponent } from '../employee/employee.component';
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {
  
  employee = new EmployeeComponent();
  departments;
  empForm;

  constructor(private route : ActivatedRoute, private employeeService: EmployeeService) { 
    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log(employeeId);
    this.employee= this.employeeService.getEmployee(employeeId);
  }

  ngOnInit(): void {
    this.departments = [
      { id: 1, name: "Payroll" },
      { id: 2, name: "Internal" },
      { id: 3, name: "HR" }
    ];

    this.empForm = new FormGroup({
      name: new FormControl(this.employee.name, [ 
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
      ]),
      salary: new FormControl(this.employee.salary, [
        Validators.required
      ]),
      permanent: new FormControl(this.employee.permanent, [
        Validators.required
      ]),
      department: new FormControl(this.employee.department, [
        Validators.required
      ])
    });
  }

  get name() { 
    return this.empForm.get('name'); 
  }

  get salary(){
    return this.empForm.get('salary');
  }

  get permanent(){
    return this.empForm.get('permanent');
  }

  get department(){
    return this.empForm.get('department');
  }

  onSubmit(){
    console.log(this.empForm.value);
  }

}
