import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CONSTANTS } from '@/constants/constantTokens';
import { UserDomainService } from './domain/service/UserDomainService';
import { UserRepositoryImpl } from './repository/UserRepositoryImpl';

@Module({
  controllers: [UserController],
  imports: [],
  providers: [
    UserService,
    {
      provide: CONSTANTS.DOMAIN_SERVICE,
      useClass: UserDomainService,
    },
    {
      provide: CONSTANTS.REPOSITORY,
      useClass: UserRepositoryImpl,
    },
  ],
  exports: [],
})
export class UserModule {}
