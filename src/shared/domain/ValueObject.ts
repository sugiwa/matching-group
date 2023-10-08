export type Primitives = string | number | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
  protected readonly _value: T;

  constructor(value: T) {
    this._value = value;
  }

  getValue() {
    return this._value;
  }

  abstract equals(other: ValueObject<T>): boolean;
}
