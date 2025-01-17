import { IUser } from "@core/domain/entities/user";
import { IApiAdapter } from "../adapters/axiosAdapter";
import { IUserDataAdapter } from "@core/domain/interfaces/iUserDataAdapter";
import apiRoutes from "@/config/api/routes";

export default class UserApi implements IUserDataAdapter {
  constructor(private adapter: IApiAdapter) {}

  async save(user: IUser) {
    /**
     * @todo specify the uri
     */
    await this.adapter.post(apiRoutes.registerUser.uri, user);
  }

  async findByEmail(email: string) {
    /**
     * @todo specify the uri, add url param
     */
    const res = await this.adapter.get("uri");
    return res.data;
  }
}
