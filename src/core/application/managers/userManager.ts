import { IUser } from "@core/domain/entities/user";
import { IUserRepository } from "@core/domain/repositories/userRepository";
import { RegisterUserInputPayload } from "@/core/domain/types/userTypes";
import RegisterUserCommand from "@core/application/commands/registerUserCommand";

export default class UserManager {
  constructor(
    private userRepository: IUserRepository // , private emailService: EmailService
  ) {}

  async registerUser(data: RegisterUserInputPayload): Promise<void> {
    const command = new RegisterUserCommand(this.userRepository);
    const registeredUser = await command.execute(data);

    this.handlePostRegistration(registeredUser);
  }

  private handlePostRegistration(user: IUser) {
    /**
     * ! IMPORTANT
     * Make sure to use a Pub/Sub approach with an EventBus Singleton
     */
    /**
     * @todo #### Handle all post-registration business logic
     * */
    // - Send emails
    // - Create user preferences
    // - Set up default settings
    // - Trigger analytics
    // etc.
  }
}
