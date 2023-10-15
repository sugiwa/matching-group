import { Entity } from '@/shared/domain/Entity';
import { GroupMemberStatus } from '../valueObject/GroupMemberStatus';

export class GroupMember extends Entity<GroupMember> {
  private _id: number;
  private _userId: number;
  private _status: GroupMemberStatus;

  get id() {
    return this._id;
  }
  get userId() {
    return this._userId;
  }
  get status() {
    return this._status;
  }

  constructor({ id, userId, status }) {
    super();
    this._id = id;
    this._userId = userId;
    this._status = status;
  }

  sameIdentityAs(other: GroupMember): boolean {
    return this.id === other.id;
  }

  toPersistence() {
    return {
      id: this.id,
      userId: this.userId,
      status: this.status.getValue(),
    };
  }
}
