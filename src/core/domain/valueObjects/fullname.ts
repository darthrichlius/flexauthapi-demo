import { z } from "zod";

const blacklist = ["insanity", "badword", "inappropriate"];

const fullnameSchema = z
  .string()
  .min(2, { message: "Fullname must be at least 2 characters long" })
  .max(15, { message: "Fullname must be at most 15 characters long" })
  .refine((value) => !blacklist.includes(value.toLowerCase()), {
    message: "Fullname contains a blacklisted word",
  });

export default class Fullname {
  constructor(public value: string) {
    const result = fullnameSchema.safeParse(value);
    if (!result.success) {
      throw new Error(result.error.errors[0].message);
    }
  }

  equals(other: Fullname): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
