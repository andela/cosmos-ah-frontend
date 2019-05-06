import axios from './axios';

export const Signin = async formData => {
  const signin = await axios.post('/login', formData);
  return signin;
};
