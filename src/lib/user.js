import axios from './article';

const register = async user => {
  try {
    const newUser = await axios.post('/signup', user);
    if (newUser) {
      return newUser;
    }
  } catch (error) {
    return error;
  }
};

export const userService = {
  register,
};
