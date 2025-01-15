import Joi from "joi";

const blacklist = ["insanity", "badword", "inappropriate"];

const fullnameSchema = Joi.string()
  .min(2)
  .max(15)
  .valid(
    "insanity",
    "badword",
    "inappropriate",
    new Error("Fullname contains a blacklisted word")
  )
  .required()
  .messages({
    "string.min": "Fullname must be at least 2 characters long",
    "string.max": "Fullname must be at most 15 characters long",
    "any.invalid": "Fullname contains a blacklisted word",
  });

export default class Fullname {
  constructor(public value: string) {
    const { error } = fullnameSchema.validate(value);
    if (error) {
      throw new Error(error.message);
    }
  }

  equals(other: Fullname): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
