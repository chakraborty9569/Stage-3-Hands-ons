import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-edit-emp-form-builder',
  templateUrl: './edit-emp-form-builder.component.html',
  styleUrls: ['./edit-emp-form-builder.component.css']
})
export class EditEmpFormBuilderComponent implements OnInit {

  employee = new EmployeeComponent();
  departments;
  empForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.departments = [
      { id: 1, name: "Payroll" },
      { id: 2, name: "Internal" },
      { id: 3, name: "HR" }
    ];

    this.empForm = this.fb.group({
      'name': [this.employee.name, [ 
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
      ]],
      'salary': [this.employee.salary, Validators.required],
      'permanent': [this.employee.permanent, Validators.required],
      'department': [this.employee.department, Validators.required],
      'skills': this.fb.array([
        this.fb.control('')
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

  get skills() {
    return this.empForm.get('skills') as FormArray;
  }

  addSkills() {
    this.skills.push(this.fb.control(''));
  }

  onSubmit(){
    console.log(this.empForm.value);
  }

}
