import { Group } from '../entity/Group';

export interface GroupRepository {
  find(groupId: number): Promise<Group>;
  create(group: Group): Promise<number>;
  update(group: Group): Promise<number>;
  delete(groupId: number): Promise<number>;
}
