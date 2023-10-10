import { GroupMember } from '../entity/GroupMember';

export interface GroupMemberRepository {
  find(groupMemberId: number): Promise<GroupMember>;
  create(groupMember: GroupMember): Promise<number>;
  update(groupMember: GroupMember): Promise<number>;
  delete(groupMemberId: number): Promise<number>;
}
