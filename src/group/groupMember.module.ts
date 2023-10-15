import { Module } from '@nestjs/common';
import { GroupMemberController } from './groupMember.controller';
import { GroupMemberService } from './groupMember.service';
import { GroupMemberDomainService } from './domain/service/GroupMemberDomainService';
import { GroupMemberRepositoryImpl } from './repository/GroupMemberRepositoryImpl';

@Module({
  controllers: [GroupMemberController],
  providers: [
    GroupMemberService,
    GroupMemberDomainService,
    GroupMemberRepositoryImpl,
  ],
})
export class GroupMemberModule {}
