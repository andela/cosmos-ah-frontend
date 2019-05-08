import { Signin } from '../../lib/signin';
import { successDispatch, errorDispatch } from '../../lib/auth';

export const signin = async formData => {
  try {
    const login = await Signin(formData);
    successDispatch(login.data.data.token);
  } catch (error) {
    errorDispatch(error.response);
  }
};
