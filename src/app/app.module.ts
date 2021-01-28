import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsListComponent,
    DepartmentFormComponent,
    EmployeesListComponent,
    EmployeesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
