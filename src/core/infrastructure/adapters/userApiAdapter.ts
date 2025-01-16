import { IUser } from "@/core/domain/entities/user";
import { IUserDataAdapter } from "@/core/domain/interfaces/iUserDataAdapter";

export default class UserApiAdapter implements IUserDataAdapter {
  constructor(private userApi: IUserApi) {}

  async save(user: IUser) {
    await this.userApi.register(user);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await this.userApi.fetchUser({
      email,
    });
  }
}
