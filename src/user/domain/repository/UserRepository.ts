import { User } from '../entity/User';

export interface UserRepository {
  find(userId: number): Promise<User>;
  create(user: User): Promise<number>;
  update(user: User): Promise<number>;
  delete(userId: number): Promise<number>;
}
