import { Inject, Injectable } from '@nestjs/common';
import { GroupDomainService } from './domain/service/GroupDomainService';
import { GroupDto } from './dto/GroupDto';

@Injectable()
export class GroupService {
  @Inject(GroupDomainService)
  private readonly groupDomainService: GroupDomainService;

  public async find(groupId: number): Promise<GroupDto> {
    const dto = await this.groupDomainService.find(groupId);
    return dto;
  }
}
