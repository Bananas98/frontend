import {Department} from "./Department";

export class Employee {
  constructor(
    public empId: number,
    public name: string,
    public date: string,
    public mail: string,
    public salary: number,
    public department: Department,
  ) {
  }
}
