import User from "@core/domain/entities/user";
import Email from "@core/domain/valueObjects/email";
import Fullname from "@core/domain/valueObjects/fullname";
import Password from "@core/domain/valueObjects/password";
import { ICommand } from "../interfaces/iCommand";
import { IUserRepository } from "@core/domain/repositories/userRepository";
import { RegisterUserInputPayload } from "@/core/domain/types/userTypes";

export default class RegisterUserCommand implements ICommand {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: RegisterUserInputPayload): Promise<any> {
    const user = new User(
      null,
      new Fullname(data.fullname),
      new Email(data.email),
      new Password(data.password, data.fullname)
    );
    return await this.userRepository.save(user);
  }
}
