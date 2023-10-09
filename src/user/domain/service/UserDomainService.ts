import { Inject } from '@nestjs/common';
import { UserRepository } from '../repository/UserRepository';
import { CONSTANTS } from '@/constants/constantTokens';
import { UserMapper } from '@/user/mapper/UserMapper';
import { UserDto } from '@/user/dto/UserDto';

export class UserDomainService {
  @Inject(CONSTANTS.REPOSITORY)
  private readonly userRepository: UserRepository;

  async find(userId: number): Promise<UserDto> {
    const user = await this.userRepository.find(userId);
    return UserMapper.domain2Dto(user);
  }

  async create(dto: UserDto): Promise<number> {
    const user = UserMapper.dto2Domain(dto);
    const userId = await this.userRepository.create(user);
    return userId;
  }

  async update(dto: UserDto): Promise<number> {
    const user = UserMapper.dto2Domain(dto);
    const userId = await this.userRepository.update(user);
    return userId;
  }

  async delete(userId: number): Promise<number> {
    this.userRepository.delete(userId);
    return userId;
  }
}
