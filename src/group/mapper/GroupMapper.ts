import { Group } from '../domain/entity/Group';
import { GroupDto } from '../dto/GroupDto';

export class GroupMapper {
  public static domain2Dto(group: Group): GroupDto {
    const dto = new GroupDto();
    dto.id = group.id;
    dto.name = group.name.getValue();
    return dto;
  }
}
