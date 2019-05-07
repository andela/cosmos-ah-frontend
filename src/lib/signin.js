import axios from './axios';

export const Signin = async formData => {
  try {
    const signin = await axios.post('/login', formData);
    return signin;
  } catch (error) {
    return error;
  }
};
