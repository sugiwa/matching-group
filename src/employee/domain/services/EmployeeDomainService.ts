import { EmployeeDto } from 'src/employee/dto/EmployeeDto';
import { EmployeeRepository } from '../repositories/EmployeeRepository';
import { Inject, Injectable } from '@nestjs/common';
import { CONSTANTS } from 'src/constants/constantTokens';
import { EmployeeMapper } from 'src/employee/mappers/EmployeeMapper';

@Injectable()
export class EmployeeDomainService {
  constructor(
    @Inject(CONSTANTS.REPOSITORY)
    private employeeRepository: EmployeeRepository,
  ) {}

  async find(employeeId: number): Promise<EmployeeDto> {
    const employee = await this.employeeRepository.find(employeeId);
    return EmployeeMapper.domain2Dto(employee);
  }

  async createEmployee(dto: EmployeeDto): Promise<number> {
    const employee = EmployeeMapper.toDomain(dto);
    const employeeId = await this.employeeRepository.create(employee);
    return employeeId;
  }

  async updateEmployee(dto: EmployeeDto): Promise<number> {
    const employee = EmployeeMapper.toDomain(dto);
    const employeeId = await this.employeeRepository.update(employee);
    return employeeId;
  }

  async deleteEmployee(employeeId: number): Promise<number> {
    await this.employeeRepository.delete(employeeId);
    return employeeId;
  }
}
