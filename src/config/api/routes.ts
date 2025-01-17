export enum EHttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

type TApiRoute = {
  name: string;
  description: string;
  method: EHttpMethod;
  uri: string;
};

const baseUrl = `${process.env.NEXT_PUBLIC_API_HOST}/api`;

const apiRoutes: Record<string, TApiRoute> = {
  listUsers: {
    name: "GET /users",
    description: "List users",
    method: EHttpMethod.GET,
    uri: `${baseUrl}/users`,
  },
  registerUser: {
    name: "POST /users",
    description: "Register users",
    method: EHttpMethod.POST,
    uri: `${baseUrl}/users`,
  },
};
export default apiRoutes;
