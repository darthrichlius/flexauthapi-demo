import Joi from "joi";
import ValueObjectBase from "@core/domain/base/valueObject";

const emailSchema = Joi.string().email().required();

export default class Email extends ValueObjectBase {
  constructor(public value: string) {
    super(value);

    const { error } = this.isValid(emailSchema, value);
    if (error) {
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
