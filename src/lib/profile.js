import axios from './axios';

export const getUserProfile = async () => {
  try {
    const profile = await axios.get('/profile');
    return { status: true, profile };
  } catch (error) {
    return { status: false, error };
  }
};
