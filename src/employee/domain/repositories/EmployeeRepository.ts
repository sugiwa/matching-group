import { Employee } from '../entities/Employee';

export interface EmployeeRepository {
  find(employeeId: number): Promise<Employee>;
  create(employee: Employee): Promise<number>;
  update(employee: Employee): Promise<number>;
  delete(employeeId: number): Promise<number>;
}
