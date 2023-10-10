import { Entity } from '@/shared/domain/Entity';
import { GroupName } from '../valueObject/GroupName';
import { GroupMember } from './GroupMember';

export class Group extends Entity<Group> {
  private _id: number;
  private _name: GroupName;
  private _members: GroupMember[] = [];

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }

  constructor({ id, name }) {
    super();
    this._id = id;
    this._name = name;
  }

  sameIdentityAs(other: Group): boolean {
    return this.id === other.id;
  }
}
