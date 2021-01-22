import { Component, OnInit } from '@angular/core';
import {Department, DepartmentService} from "../departmentService/department.service";
import {Employee, EmployeeService} from "../employeeService/employee.service";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[];

  constructor( private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.employees=response;
  }

  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(employee)
      .subscribe( data => {
        this.employees = this.employees.filter(x => x.empId !== id);
      })
  };

}
