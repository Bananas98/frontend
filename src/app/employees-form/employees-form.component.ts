import { Component, OnInit } from '@angular/core';
import {DepartmentService} from "../departmentService/department.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employeeService/employee.service";

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {


  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['empId'];
    this.isAddMode = !this.id;
  }


  createEmployee(): void {
    this.employeeService.createEmployee(this.form.value)
      .subscribe( data => {
        alert("Employee created successfully.");
      });
  };

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.id, this.form.value)
      .subscribe( data => {
        alert("Employee update successfully.");
      });
  };

}
