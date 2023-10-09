import { Entity } from '@/shared/domain/Entity';
import { UserName } from '../valueObject/UserName';

export class User extends Entity<User> {
  private _id: number;
  private _name: UserName;

  constructor({ id, name }) {
    super();
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }

  sameIdentityAs(other: User): boolean {
    return this.id === other.id;
  }

  toPersistence(): any {
    return {
      id: this.id,
      name: this.name.getValue(),
    };
  }
}
