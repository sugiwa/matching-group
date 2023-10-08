import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { CONSTANTS } from 'src/constants/constantTokens';
import { EmployeeDomainService } from './domain/services/EmployeeDomainService';
import { EmployeeRepositoryImpl } from './repositories/EmployeeRepositoryImpl';

@Module({
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    {
      provide: CONSTANTS.DOMAIN_SERVICE,
      useClass: EmployeeDomainService,
    },
    {
      provide: CONSTANTS.REPOSITORY,
      useClass: EmployeeRepositoryImpl,
    },
  ],
  exports: [EmployeeService],
})
export class EmployeeModule {}
