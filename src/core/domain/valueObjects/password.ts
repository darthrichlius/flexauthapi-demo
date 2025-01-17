import { z } from "zod";

const passwordSchema = (fullname: string) =>
  z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(30, { message: "Password must be at most 30 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one digit" })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one alphanumeric character",
    })
    .refine((value) => !value.includes(fullname), {
      message: "Password should not contain the user fullname",
    });

export default class Password {
  constructor(public value: string, private fullname: string) {
    const result = passwordSchema(this.fullname).safeParse(value);
    if (!result.success) {
      throw new Error(result.error.errors[0].message);
    }
  }

  equals(other: Password): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
