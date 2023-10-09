import { PrismaClient } from '@prisma/client';
import { User } from '../domain/entity/User';
import { UserRepository } from '../domain/repository/UserRepository';
import { UserMapper } from '../mapper/UserMapper';

export class UserRepositoryImpl implements UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async find(userId: number): Promise<User> {
    const entity = await this.prisma.userEntity.findFirst({
      where: { id: userId },
    });
    const user = UserMapper.entity2Domain(entity);
    return user;
  }

  async create(user: User): Promise<number> {
    const { id, ...data } = user.toPersistence();
    const entity = await this.prisma.userEntity.create({ data });
    return entity.id;
  }

  async update(user: User): Promise<number> {
    const data = user.toPersistence();
    const entity = await this.prisma.userEntity.update({
      data,
      where: { id: data.id },
    });
    return entity.id;
  }

  async delete(userId: number): Promise<number> {
    await this.prisma.userEntity.delete({ where: { id: userId } });
    return userId;
  }
}
