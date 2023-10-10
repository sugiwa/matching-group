import { PrismaClient } from '@prisma/client';
import { Group } from '../domain/entity/Group';
import { GroupRepository } from '../domain/repository/GroupRepository';
import { GroupMapper } from '../mapper/GroupMapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupRepositoryImpl implements GroupRepository {
  private readonly prisma: PrismaClient = new PrismaClient();

  async find(groupId: number): Promise<Group> {
    const entity = await this.prisma.groupEntity.findFirst({
      where: { id: groupId },
    });
    const group = GroupMapper.entity2Domain(entity);
    return group;
  }

  async create(group: Group): Promise<number> {
    const { id, ...data } = group.toPersistence();
    const entity = await this.prisma.groupEntity.create({ data });
    return entity.id;
  }

  async update(group: Group): Promise<number> {
    const data = group.toPersistence();
    const entity = await this.prisma.groupEntity.update({
      data,
      where: { id: group.id },
    });
    return entity.id;
  }

  async delete(groupId: number): Promise<number> {
    await this.prisma.groupEntity.delete({ where: { id: groupId } });
    return groupId;
  }
}
