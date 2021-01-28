import { Component, OnInit } from '@angular/core';
import {Department, DepartmentService} from "../departmentService/department.service";

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {



  constructor(private departmentService: DepartmentService) {}

  departmentList: any = [];
  department: any;

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(
      response => {
        this.departmentList = response.data;
      });
  }

  deleteDepartment(id: number): void {
    this.departmentService.deleteDepartment(id)
      .subscribe( data => {
        this.departmentList = this.departmentList.filter((x: Department) => x.id !== id);
      })
  };

  updateClick(department) {
    this.department = department;
  }

  addClick() {
    this.department = {
      Id: 0,
      Name: ''
    };
  }



}
