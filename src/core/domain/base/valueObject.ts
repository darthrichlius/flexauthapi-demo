import { IValueObject } from "@core/domain/interfaces/iValueObject";
import { SafeParseReturnType, ZodSchema } from "zod";

export default abstract class ValueObjectBase implements IValueObject {
  protected constructor(protected value: any) {}

  protected isValid(
    schema: ZodSchema,
    value: any
  ): SafeParseReturnType<any, any> {
    return schema.safeParse(value);
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
