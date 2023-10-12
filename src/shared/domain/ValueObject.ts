export type Primitives = string | number | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
  protected readonly _value: T;

  constructor(value: T) {
    this._value = value;
    this.validation();
  }

  getValue() {
    return this._value;
  }

  validation(): void {
    // do nothing
  }

  abstract equals(other: ValueObject<T>): boolean;
}
