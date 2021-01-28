import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Department} from "../models/Department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) {
  }

  getDepartments(): Observable<any> {
    return this.httpClient.get<any>('departments');
  }

  public createDepartment(params: Observable<Department>) {
    return this.httpClient.post<Department>("department", params);
  }

  public updateDepartment(id: number, params: Observable<Department>) {
    return this.httpClient.put<Department>(`department/${id}`, params);
  }

  public deleteDepartment(id: number) {
    return this.httpClient.delete<Department>(`department/${id}`);
  }

}
