import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getEmployees(): Observable<any> {
    return this.httpClient.get<any>('employees');
  }

  public createEmployee(params: Observable<Employee>) {
    return this.httpClient.post<Employee>("employee", params);
  }

  public updateEmployee(id: number, params: Observable<Employee>) {
    return this.httpClient.put<Employee>(`employee/${id}`, params);
  }

  public deleteEmployee(id: number) {
    return this.httpClient.delete<Employee>(`employee/${id}`);
  }

}
