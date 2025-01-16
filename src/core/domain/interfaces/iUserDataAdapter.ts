import { IUser } from "../entities/user";

export interface IUserDataAdapter {
  save(user: IUser): Promise<void>;
  findByEmail(email: string): Promise<IUser | null>;
}
