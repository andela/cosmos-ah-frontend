import { successDispatch, errorDispatch } from '../../lib/auth';
import axios from '../../lib/axios';

export const signin = async formData => {
  try {
    const login = await axios.post('/login', formData);
    successDispatch(login.data.data.token);
  } catch (error) {
    errorDispatch(error.response);
  }
};
