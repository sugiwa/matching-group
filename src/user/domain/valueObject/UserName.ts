import { ValueObject } from '@/shared/domain/ValueObject';

export class UserName extends ValueObject<string> {
  equals(other: UserName): boolean {
    return this.getValue() === other.getValue();
  }
}
