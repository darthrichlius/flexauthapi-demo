import Joi from "joi";

const passwordSchema = (fullname: string) =>
  Joi.string()
    .min(8)
    .max(30)
    .pattern(/[A-Z]/)
    .pattern(/[0-9]/)
    .pattern(/[a-zA-Z]/)
    .disallow(fullname)
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters long",
      "string.max": "Password must be at most 30 characters long",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one digit, and one alphanumeric character",
      "any.only": "Password should not contain the user fullname",
    });

export default class Password {
  constructor(public value: string, private fullname: string) {
    const { error } = passwordSchema(fullname).validate(value);
    if (error) {
      throw new Error(error.message);
    }
  }

  equals(other: Password): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
