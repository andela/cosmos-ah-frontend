import axios from './axios';
// import axios from 'axios';

const register = async user => {
  try {
    const newUser = await axios.post('/signup', user);
    return newUser;
  } catch (error) {
    return error;
  }
};

export const userService = {
  register,
};
