import { GroupMemberEntity } from '@prisma/client';
import { GroupMember } from '../domain/entity/GroupMember';
import { GroupMemberStatus } from '../domain/valueObject/GroupMemberStatus';
import { GroupMemberDto } from '../dto/GroupMemberDto';

export class GroupMemberMapper {
  public static entity2Domain(entity: GroupMemberEntity): GroupMember {
    const status = new GroupMemberStatus(entity.status);
    const groupMember = new GroupMember({
      id: entity.id,
      userId: entity.userId,
      status,
    });
    return groupMember;
  }

  public static domain2Dto(groupMember: GroupMember): GroupMemberDto {
    const dto = new GroupMemberDto();
    dto.id = groupMember.id;
    dto.userId = groupMember.userId;
    dto.status = groupMember.status.getValue();
    return dto;
  }

  public static dto2domain(dto: GroupMemberDto): GroupMember {
    const status = new GroupMemberStatus(dto.status);
    const groupMember = new GroupMember({
      id: dto.id,
      userId: dto.userId,
      status,
    });
    return groupMember;
  }
}
