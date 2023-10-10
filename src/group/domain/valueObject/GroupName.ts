import { ValueObject } from '@/shared/domain/ValueObject';

export class GroupName extends ValueObject<string> {
  equals(other: GroupName): boolean {
    return this.getValue() === other.getValue();
  }
}
