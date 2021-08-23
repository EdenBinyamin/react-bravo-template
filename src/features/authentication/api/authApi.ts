import axios from 'networkManager';
import { email } from '../types/authTypes';

export const authLoginApi = async (email: email, password: string) => {
  const res = await axios.post('/login', { email, password });
  return res.data;
};
