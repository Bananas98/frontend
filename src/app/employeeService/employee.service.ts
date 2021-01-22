import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public date: string,
    public mail: string,
    public salary: string,
    public depId: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getEmployees() {
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:4200/employees');
  }

  public createEmployee(params: any) {
    return this.httpClient.post<Employee>("http://localhost:4200/employee", params);
  }
  public updateEmployee(id: string,params: any) {
    return this.httpClient.put<Employee>(`http://localhost:4200/employee/${id}`,params);
  }

  public deleteEmployee(id: string) {
    return this.httpClient.delete<Employee>(`http://localhost:4200/employee/${id}`);
  }

}
