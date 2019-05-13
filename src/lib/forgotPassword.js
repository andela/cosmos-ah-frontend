import axios from './axios';

export const userForgotPassword = async formInput => {
  try {
    const forgotPassword = await axios.post('/forgot-password', formInput);
    return forgotPassword;
  } catch (error) {
    return error;
  }
};
