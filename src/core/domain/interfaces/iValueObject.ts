export interface IValueObject {
  equals(other: IValueObject): boolean;
  toString(): string;
}
