import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class Department {
  constructor(
    public id: string,
    public name: string,

  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) {
  }

  getDepartments() {
    console.log("test call");
    return this.httpClient.get<Department[]>('http://localhost:4200/departments');
  }

  public createDepartment(params: any) {
    return this.httpClient.post<Department>("http://localhost:4200/department", params);
  }
  public updateDepartment(id: string,params: any) {
    return this.httpClient.put<Department>(`http://localhost:4200/department/${id}`,params);
  }

  public deleteDepartment(id: string) {
    return this.httpClient.delete<Department>(`http://localhost:4200/department/${id}`);
  }

}
