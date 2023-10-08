import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { CompanyModule } from './company/company.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    EmployeeModule,
    CompanyModule,
    AttendanceModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
