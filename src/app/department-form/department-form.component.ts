import { Component, OnInit } from '@angular/core';
import {Department, DepartmentService} from "../departmentService/department.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

class AlertService {
}

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;

  constructor(
    private departmentService: DepartmentService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
  }


  createDepartment(): void {
    this.departmentService.createDepartment(this.form.value)
      .subscribe( data => {
        alert("Department created successfully.");
      });
  };

  updateDepartment(): void {
    this.departmentService.updateDepartment(this.id, this.form.value)
      .subscribe( data => {
        alert("Department update successfully.");
      });
  };
}
