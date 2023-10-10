import { Inject, Injectable } from '@nestjs/common';
import { CONSTANTS } from '@/constants/constantTokens';
import { GroupDto } from '@/group/dto/GroupDto';
import { GroupRepository } from '../repository/GroupRepository';
import { GroupMapper } from '@/group/mapper/GroupMapper';

@Injectable()
export class GroupDomainService {
  @Inject(CONSTANTS.GROUP_REPOSITORY)
  private readonly groupRepository: GroupRepository;

  async find(groupId: number): Promise<GroupDto> {
    const group = await this.groupRepository.find(groupId);
    const dto = GroupMapper.domain2Dto(group);
    return dto;
  }

  async create(dto: GroupDto): Promise<number> {
    const group = GroupMapper.dto2Domain(dto);
    const groupId = await this.groupRepository.create(group);
    return groupId;
  }

  async update(dto: GroupDto): Promise<number> {
    const group = GroupMapper.dto2Domain(dto);
    const groupId = await this.groupRepository.update(group);
    return groupId;
  }

  async delete(groupId: number): Promise<number> {
    await this.groupRepository.delete(groupId);
    return groupId;
  }
}
