import {Component, Input, OnInit} from '@angular/core';
import {DepartmentService} from "../departmentService/department.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employeeService/employee.service";
import {Department} from "../models/Department";

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  @Input() employee: any;
  employeeForm: FormGroup;
  empId!: number;
  departmentsList: any = [];

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute) {
    this.employeeForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      date: new FormControl('', [
        Validators.required,
      ]),
      salary: new FormControl('', [
        Validators.required,
        Validators.pattern("/^(\d){1,13}$/g"),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
  }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(
      response => {
        this.departmentsList = response.data;
      });
    this.empId = this.route.snapshot.params['empId'];
  }


  createEmployee(): void {
    this.employeeService.createEmployee(this.employeeForm.value)
      .subscribe(data => {
        alert("Employee created successfully.");
      });
  };

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.empId, this.employeeForm.value)
      .subscribe(data => {
        alert("Employee update successfully.");
      });
  };

}
