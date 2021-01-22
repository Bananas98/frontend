import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsListComponent,
    DepartmentFormComponent,
    HeaderComponent,
    FooterComponent,
    EmployeesListComponent,
    EmployeesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
