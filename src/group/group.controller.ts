import { Controller, Inject } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDto } from './dto/GroupDto';

@Controller('group')
export class GroupController {
  @Inject(GroupService)
  private readonly groupService: GroupService;

  public async find(groupId: number): Promise<GroupDto> {
    const dto = await this.groupService.find(groupId);
    return dto;
  }
}
