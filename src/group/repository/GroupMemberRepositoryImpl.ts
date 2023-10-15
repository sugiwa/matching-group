import { PrismaClient } from '@prisma/client';
import { GroupMember } from '../domain/entity/GroupMember';
import { GroupMemberRepository } from '../domain/repository/GroupMemberRepository';
import { GroupMemberMapper } from '../mapper/GroupMemberMapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupMemberRepositoryImpl implements GroupMemberRepository {
  private readonly prisma: PrismaClient = new PrismaClient();

  async find(groupMemberId: number): Promise<GroupMember> {
    const entity = await this.prisma.groupMemberEntity.findFirst({
      where: { id: groupMemberId },
    });
    return GroupMemberMapper.entity2Domain(entity);
  }

  async create(groupMember: GroupMember): Promise<number> {
    const { id, ...data } = groupMember.toPersistence();
    const entity = await this.prisma.groupMemberEntity.create({ data });
    return entity.id;
  }

  async update(groupMember: GroupMember): Promise<number> {
    const data = groupMember.toPersistence();
    const entity = await this.prisma.groupMemberEntity.create({ data });
    return entity.id;
  }

  async delete(groupMemberId: number): Promise<number> {
    await this.prisma.groupMemberEntity.delete({
      where: { id: groupMemberId },
    });
    return groupMemberId;
  }
}
