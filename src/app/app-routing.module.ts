import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentsListComponent} from "./departments-list/departments-list.component";
import {DepartmentFormComponent} from "./department-form/department-form.component";

const routes: Routes = [
  {path:"departments", component: DepartmentsListComponent},
  {path:"department", component: DepartmentFormComponent},
  {path:"employees", component: EmployeesListComponent},
  {path:"employee", component: EmployeeFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
