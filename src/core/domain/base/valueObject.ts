import { AnySchema, ValidationResult } from "joi";
import { IValueObject } from "@core/domain/interfaces/iValueObject";

export default abstract class ValueObjectBase implements IValueObject {
  protected constructor(protected value: any) {}

  protected isValid(schema: AnySchema, value: string): ValidationResult {
    return schema.validate(value);
  }

  equals(other: IValueObject): boolean {
    if (other instanceof ValueObjectBase) {
      return this.value === other.toString();
    }
    return false;
  }
  toString(): string {
    return this.value.toString();
  }
}
