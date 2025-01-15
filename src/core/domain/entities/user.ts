import Email from "@core/domain/valueObjects/email";
import Fullname from "@core/domain/valueObjects/fullname";
import Password from "@core/domain/valueObjects/password";

export interface IUser {
  getId(): string | null;
  getFullname(): Fullname;
  getEmail(): Email;
  getPassword(): Password;
  changeFullname(newFullname: Fullname): void;
  changeEmail(newEmail: Email): void;
  changePassword(newPassword: Password): void;
}

export default class User implements IUser {
  constructor(
    private id: string | null,
    private fullname: Fullname,
    private email: Email,
    private password: Password
  ) {}

  getId(): string | null {
    return this.id;
  }

  getFullname(): Fullname {
    return this.fullname;
  }
  getEmail(): Email {
    return this.email;
  }
  getPassword(): Password {
    return this.password;
  }

  changeFullname(newFullname: Fullname): IUser {
    this.fullname = newFullname;
    return this;
  }
  changeEmail(newEmail: Email): IUser {
    this.email = newEmail;
    return this;
  }
  changePassword(newPassword: Password): IUser {
    this.password = newPassword;
    return this;
  }
}
