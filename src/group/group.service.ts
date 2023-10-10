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

  public async create(dto: GroupDto): Promise<number> {
    const groupId = await this.groupDomainService.create(dto);
    return groupId;
  }

  public async update(dto: GroupDto): Promise<number> {
    const groupId = await this.groupDomainService.update(dto);
    return groupId;
  }

  public async delete(groupId: number): Promise<number> {
    await this.groupDomainService.delete(groupId);
    return groupId;
  }
}
