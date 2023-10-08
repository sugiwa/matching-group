import { Mapper } from 'src/shared/mapper/Mapper';
import { Employee } from '../domain/entities/Employee';
import { EmployeeDto } from '../dto/EmployeeDto';
import { EmployeeName } from '../domain/valueObjects/EmployeeName';
import { Employee as EmployeeEntity } from '@prisma/client';

export class EmployeeMapper implements Mapper<Employee> {
  public static toDomain(dto: EmployeeDto): Employee {
    const id: number = dto.id;
    const name: EmployeeName = new EmployeeName(dto.name);
    const employee = new Employee({ id, name });
    return employee;
  }

  public static entity2Domain(entity: EmployeeEntity): Employee {
    const name: EmployeeName = new EmployeeName(entity.name);
    const employee = new Employee({ id: entity.id, name });
    return employee;
  }

  public static domain2Dto(employee: Employee): EmployeeDto {
    const dto = new EmployeeDto();
    dto.id = employee.id;
    dto.name = employee.name.getValue();
    return dto;
  }
}
