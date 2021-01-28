import {Component, Input, OnInit} from '@angular/core';
import {Department, DepartmentService} from "../departmentService/department.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  @Input() department: any;
  departmentForm: FormGroup;
  id!: number;

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute) {
    this.departmentForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ])
    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }


  createDepartment(): void {
    this.departmentService.createDepartment(this.departmentForm.value)
      .subscribe(data => {
        alert("Department created successfully.");
      });
  };

  updateDepartment(): void {
    this.departmentService.updateDepartment(this.id, this.departmentForm.value)
      .subscribe(data => {
        alert("Department update successfully.");
      });
  };
}
