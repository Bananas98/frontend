import { Component, OnInit } from '@angular/core';
import {Employee, EmployeeService} from "../employeeService/employee.service";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employeeList: any = [];
  employee: any;

  constructor( private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      response => {
        this.employeeList = response.data;
      });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id)
      .subscribe( data => {
        this.employeeList = this.employeeList.filter((x: Employee) => x.id !== id);
      })
  };

  updateClick(employee) {
    this.employee = employee;
  }

  addClick() {
    this.employee = {
      id: 0,
      name: ''
    };

  }

}
