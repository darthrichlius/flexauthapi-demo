import { IUser } from "@core/domain/entities/user";

export interface IUserRepository {
  save: (user: IUser) => Promise<any>;
  findByEmail: (email: string) => Promise<any>;
}
