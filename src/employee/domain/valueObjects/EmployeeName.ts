import { ValueObject } from '@shared/domain/ValueObject';

export class EmployeeName extends ValueObject<string> {
  equals(other: EmployeeName): boolean {
    return this.getValue() === other.getValue();
  }
}
