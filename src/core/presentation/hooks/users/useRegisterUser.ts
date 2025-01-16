import { useMutation } from "@tanstack/react-query";
import { userRegistration } from "@core/presentation/controllers/userController";
import { RegisterUserInputPayload } from "@/core/domain/types/userTypes";

const useRegisterUser = () => {
  return useMutation({
    mutationFn: async (data: RegisterUserInputPayload): Promise<any> => {
      await userRegistration(data);
    },
  });
};

export default useRegisterUser;
