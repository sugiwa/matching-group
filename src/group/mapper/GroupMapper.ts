import { GroupEntity } from '@prisma/client';
import { Group } from '../domain/entity/Group';
import { GroupName } from '../domain/valueObject/GroupName';
import { GroupDto } from '../dto/GroupDto';

export class GroupMapper {
  public static domain2Dto(group: Group): GroupDto {
    const dto = new GroupDto();
    dto.id = group.id;
    dto.name = group.name.getValue();
    return dto;
  }

  public static dto2Domain(dto: GroupDto): Group {
    const name: GroupName = new GroupName(dto.name);
    const group = new Group({ id: dto.id, name });
    return group;
  }

  public static entity2Domain(entity: GroupEntity): Group {
    const name: GroupName = new GroupName(entity.name);
    const group = new Group({ id: entity.id, name });
    return group;
  }
}
