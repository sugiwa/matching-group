export abstract class Entity<T> {
  abstract sameIdentityAs(other: T): boolean;
}
