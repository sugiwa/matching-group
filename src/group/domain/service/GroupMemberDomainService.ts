import { Inject, Injectable } from '@nestjs/common';
import { GroupMemberRepository } from '../repository/GroupMemberRepository';
import { GroupMemberMapper } from '@/group/mapper/GroupMemberMapper';
import { GroupMemberDto } from '@/group/dto/GroupMemberDto';
import { GroupMemberRepositoryImpl } from '@/group/repository/GroupMemberRepositoryImpl';

@Injectable()
export class GroupMemberDomainService {
  @Inject(GroupMemberRepositoryImpl)
  private readonly groupMemberRepository: GroupMemberRepository;

  async find(groupMemberId: number): Promise<GroupMemberDto> {
    const groupMember = await this.groupMemberRepository.find(groupMemberId);
    const dto = GroupMemberMapper.domain2Dto(groupMember);
    return dto;
  }

  async create(dto: GroupMemberDto): Promise<number> {
    const groupMember = GroupMemberMapper.dto2domain(dto);
    const groupMemberId = await this.groupMemberRepository.create(groupMember);
    return groupMemberId;
  }

  async update(dto: GroupMemberDto): Promise<number> {
    const groupMember = GroupMemberMapper.dto2domain(dto);
    const groupMemberId = await this.groupMemberRepository.update(groupMember);
    return groupMemberId;
  }

  async delete(groupMemberId: number): Promise<number> {
    await this.groupMemberRepository.delete(groupMemberId);
    return groupMemberId;
  }
}
