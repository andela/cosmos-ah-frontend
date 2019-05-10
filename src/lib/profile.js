import axios from './axios';

export const getUserProfile = async () => {
  try {
    const { data: { data: { user: profile } } } = await axios.get('/profile/view/979eaa2e-5b8f-4103-8192-4639afae2ba9');
    return profile;
  } catch (error) {
    return error;
  }
};
