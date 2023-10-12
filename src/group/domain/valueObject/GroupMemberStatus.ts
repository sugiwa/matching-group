import { ValueObject } from '@/shared/domain/ValueObject';
import { error } from 'console';

export const GROUP_MEMBER_STATUS = {
  onwer: 0,
  member: 1,
  pending: 2,
};

const statuses = Object.values(GROUP_MEMBER_STATUS);

export class GroupMemberStatus extends ValueObject<number> {
  equals(other: GroupMemberStatus): boolean {
    return this.getValue() === other.getValue();
  }

  validation(): void {
    if (!statuses.includes(this.getValue())) throw error;
  }
}
