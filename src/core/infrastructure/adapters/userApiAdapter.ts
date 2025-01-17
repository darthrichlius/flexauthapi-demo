import { IUser } from "@/core/domain/entities/user";
import { IUserDataAdapter } from "@/core/domain/interfaces/iUserDataAdapter";

export default class UserApiAdapter implements IUserDataAdapter {
  constructor(private userApi: IUserDataAdapter) {}

  async save(user: IUser) {
    await this.userApi.save(user);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await this.userApi.findByEmail(email);
  }
}
