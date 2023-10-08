import { Employee } from '../domain/entities/Employee';
import { EmployeeRepository } from '../domain/repositories/EmployeeRepository';
import { PrismaClient } from '@prisma/client';
import { EmployeeMapper } from '../mappers/EmployeeMapper';

export class EmployeeRepositoryImpl implements EmployeeRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  createId(): number {
    return 1;
  }

  async find(employeeId: number): Promise<Employee> {
    const entity = await this.prisma.employee.findFirst({
      where: { id: employeeId },
    });
    const employee = EmployeeMapper.entity2Domain(entity);
    return employee;
  }

  async create(employee: Employee): Promise<number> {
    const { id, ...data } = employee.toPersistence();
    const emp = await this.prisma.employee.create({ data });
    return emp.id;
  }

  async update(employee: Employee): Promise<number> {
    const data = employee.toPersistence();
    const emp = await this.prisma.employee.update({
      data,
      where: { id: data.id },
    });
    return emp.id;
  }

  async delete(employeeId: number): Promise<number> {
    await this.prisma.employee.delete({ where: { id: employeeId } });
    return employeeId;
  }
}
