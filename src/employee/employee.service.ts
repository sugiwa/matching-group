import { Inject, Injectable } from '@nestjs/common';
import { EmployeeDomainService } from './domain/services/EmployeeDomainService';
import { CONSTANTS } from 'src/constants/constantTokens';
import { EmployeeDto } from './dto/EmployeeDto';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(CONSTANTS.DOMAIN_SERVICE)
    private employeeDomainService: EmployeeDomainService,
  ) {}

  test(): string {
    return 'OK';
  }

  async find(employeeId: number): Promise<EmployeeDto> {
    return await this.employeeDomainService.find(employeeId);
  }

  async createEmployee(props: EmployeeDto): Promise<number> {
    const employeeId = this.employeeDomainService.createEmployee(props);
    return employeeId;
  }

  async updateEmployee(props: EmployeeDto): Promise<number> {
    const employeeId = this.employeeDomainService.updateEmployee(props);
    return employeeId;
  }

  async deleteEmployee(employeeId: number): Promise<void> {
    await this.employeeDomainService.deleteEmployee(employeeId);
  }
}
