import { Component, OnInit } from '@angular/core';
import {Department, DepartmentService} from "../departmentService/department.service";

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
  departments: Department[];

  constructor( private departmentService:DepartmentService) { }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.departments=response;
  }

  deleteDepartment(id: string): void {
    this.departmentService.deleteDepartment(id)
      .subscribe( data => {
        this.departments = this.departments.filter(x => x.id !== id);
      })
  };

}
