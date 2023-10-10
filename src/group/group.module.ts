import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { GroupDomainService } from './domain/service/GroupDomainService';
import { GroupRepositoryImpl } from './repository/GroupRepositoryImpl';
import { CONSTANTS } from '@/constants/constantTokens';

@Module({
  controllers: [GroupController],
  providers: [
    GroupService,
    GroupDomainService,
    {
      provide: CONSTANTS.GROUP_REPOSITORY,
      useClass: GroupRepositoryImpl,
    },
  ],
})
export class GroupModule {}
