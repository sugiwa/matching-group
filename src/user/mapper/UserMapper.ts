import { UserEntity } from '@prisma/client';
import { User } from '../domain/entity/User';
import { UserName } from '../domain/valueObject/UserName';
import { UserDto } from '../dto/UserDto';

export class UserMapper {
  public static dto2Domain(dto: UserDto): User {
    const name: UserName = new UserName(dto.name);
    const user = new User({ id: dto.id, name });
    return user;
  }

  public static entity2Domain(entity: UserEntity): User {
    const name: UserName = new UserName(entity.name);
    const user = new User({ id: entity.id, name });
    return user;
  }

  public static domain2Dto(user: User): UserDto {
    const userDto = new UserDto();
    userDto.id = user.id;
    userDto.name = user.name.getValue();
    return userDto;
  }
}
