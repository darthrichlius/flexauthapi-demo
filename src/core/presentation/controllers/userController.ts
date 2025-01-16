import UserManager from "@core/application/managers/userManager";
import { RegisterUserInputPayload } from "@/core/domain/types/userTypes";
import AxiosAdapter from "@core/infrastructure/adapters/axiosAdapter";
import UserApi from "@core/infrastructure/api/userApi";
import UserRepository from "@core/infrastructure/repositories/userRepository";

/**
 * The controller acts as a high-level orchestrator.
 * It manages calling the appropriate domain service action and provides it with the necessary dependencies.
 * Without a controller:
 * 1. We would either have to call the service action directly, creating strong coupling.
 * 2. Or delegate this technical logic to a hook, which would not be ideal.
 *
 * Delegating such implementation to the hook would not be a good practice because it mixes concerns.
 */

/**
 * As the data management is handled by the API, we use an API adapter.
 * However, technically, it could have been a database adapter instead.
 */
const dataAdapter = new AxiosAdapter();
const userApi = new UserApi(dataAdapter);

/**
 * The repository provides a granular approach to manage data.
 * For example, we could fetch users using their email or ID.
 * Similarly, we can encapsulate complex data logic, such as data filtering.
 *
 * The repository will be used by the UserManager (domain service).
 * The UserManager is responsible for business logic and therefore encapsulates data operations, events, and other side effects.
 */
const userRepository = new UserRepository(userApi);
const userManager = new UserManager(userRepository);

/**
 * Controller Action Function to handle user registration.
 */
export const userRegistration = (data: RegisterUserInputPayload) => {
  return userManager.registerUser(data);
};
