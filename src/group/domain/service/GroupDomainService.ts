import { Inject, Injectable } from '@nestjs/common';
import { CONSTANTS } from '@/constants/constantTokens';
import { GroupDto } from '@/group/dto/GroupDto';
import { GroupRepository } from '../repository/GroupRepository';
import { GroupMapper } from '@/group/mapper/GroupMapper';

@Injectable()
export class GroupDomainService {
  @Inject(CONSTANTS.REPOSITORY)
  private readonly groupRepository: GroupRepository;

  async find(groupId: number): Promise<GroupDto> {
    const group = await this.groupRepository.find(groupId);
    const dto = GroupMapper.domain2Dto(group);
    return dto;
  }
}
