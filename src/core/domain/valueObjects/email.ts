import { z } from "zod";
import ValueObjectBase from "@core/domain/base/valueObject";

const emailSchema = z.string().email();

export default class Email extends ValueObjectBase {
  constructor(public value: string) {
    super(value);

    const result = this.isValid(emailSchema, value);
    if (!result.success) {
      throw new Error("Invalid email address");
    }
  }

  equals(other: Email): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
