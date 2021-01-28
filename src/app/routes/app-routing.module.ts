import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentsListComponent} from "../departments-list/departments-list.component";
import {DepartmentFormComponent} from "../department-form/department-form.component";
import {EmployeesListComponent} from "../employees-list/employees-list.component";
import {EmployeesFormComponent} from "../employees-form/employees-form.component";

const routes: Routes = [
  {path:"departments", component: DepartmentsListComponent},
  {path:"department", component: DepartmentFormComponent},
  {path:"employees", component: EmployeesListComponent},
  {path:"employee", component: EmployeesFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
