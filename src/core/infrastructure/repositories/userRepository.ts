import { IUser } from "@/core/domain/entities/user";
import { IUserDataAdapter } from "@/core/domain/interfaces/iUserDataAdapter";
import { IUserRepository } from "@/core/domain/repositories/userRepository";

export default class UserRepository implements IUserRepository {
  constructor(private userAdapter: IUserDataAdapter) {}
  async save(user: IUser): Promise<any> {
    return await this.userAdapter.save(user);
  }
  async findByEmail(email: string): Promise<IUser | null> {
    return await this.userAdapter.findByEmail(email);
  }
}
