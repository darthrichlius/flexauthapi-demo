export type RegisterUserInputPayload = {
  fullname: string;
  email: string;
  password: string;
};

export type RegisterUserOutputPayload = {
  id: string;
  fullname: string;
  email: string;
  password: string;
};
