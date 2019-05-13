import axios from './axios';

export const userForgotPassword = async email => {
  const forgotPassword = await axios.post('/forgot-password', { email });
  return forgotPassword;
};
