import { Inject, Injectable } from '@nestjs/common';
import { GroupMemberDomainService } from './domain/service/GroupMemberDomainService';
import { GroupMemberDto } from './dto/GroupMemberDto';

@Injectable()
export class GroupMemberService {
  @Inject(GroupMemberDomainService)
  private readonly groupMemberDomainService: GroupMemberDomainService;

  async find(groupMemberId: number): Promise<GroupMemberDto> {
    return this.groupMemberDomainService.find(groupMemberId);
  }

  async create(dto: GroupMemberDto): Promise<number> {
    return await this.groupMemberDomainService.create(dto);
  }

  async update(dto: GroupMemberDto): Promise<number> {
    return await this.groupMemberDomainService.update(dto);
  }

  async delete(groupMemberId: number): Promise<number> {
    return await this.groupMemberDomainService.delete(groupMemberId);
  }
}
