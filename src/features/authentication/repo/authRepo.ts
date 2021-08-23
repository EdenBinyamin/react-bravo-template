import { authLoginApi } from '../api/authApi';
import { User } from '../models/User.model';
import { email } from '../types/authTypes';

export const authLoginRepo = async (email: email, password: string) => {
  const { firstName, lastName, age, hobbies } = await authLoginApi(
    email,
    password,
  );
  const user: User = {
    firstName,
    lastName,
    age,
    hobbies,
  };
  return user;
};
