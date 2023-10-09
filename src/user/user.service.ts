import { Inject, Injectable } from '@nestjs/common';
import { UserDomainService } from './domain/service/UserDomainService';
import { CONSTANTS } from '@/constants/constantTokens';
import { UserDto } from './dto/UserDto';

@Injectable()
export class UserService {
  @Inject(CONSTANTS.DOMAIN_SERVICE)
  private readonly userDomainService: UserDomainService;

  async find(userId: number): Promise<UserDto> {
    const user = await this.userDomainService.find(userId);
    return user;
  }

  async create(dto: UserDto): Promise<number> {
    const userId = await this.userDomainService.create(dto);
    return userId;
  }

  async update(dto: UserDto): Promise<number> {
    const userId = await this.userDomainService.update(dto);
    return userId;
  }

  async delete(userId: number): Promise<number> {
    return await this.userDomainService.delete(userId);
  }
}
