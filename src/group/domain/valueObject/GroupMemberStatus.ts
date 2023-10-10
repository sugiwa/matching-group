import { ValueObject } from '@/shared/domain/ValueObject';

export class GroupMemberStatus extends ValueObject<number> {
  equals(other: GroupMemberStatus): boolean {
    return this.getValue() === other.getValue();
  }
}
