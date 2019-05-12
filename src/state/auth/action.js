import jwtDecode from 'jwt-decode';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './actionTypes';
import axios from '../../lib/axios';
import { decodeToken, setLocalStorage } from '../../lib/auth';
import { error } from '../alert/actions';

export const request = () => ({
  type: REGISTER_REQUEST,
});

export const success = user => ({
  type: REGISTER_SUCCESS,
  user,
});

export const failure = errorMessage => ({
  type: REGISTER_FAILURE,
  error: errorMessage,
});

export const register = newUser => async dispatch => {
  try {
    dispatch(request());
    const registeredUser = await axios.post('/signup', newUser);
    const { token } = registeredUser.data.data;
    const decodedToken = decodeToken(token);
    dispatch(success(decodedToken));
    setLocalStorage('token', token);
  } catch (err) {
    dispatch(failure(err));
    let { message } = err.response.data;
    if (typeof message === 'object') {
      message = Object.values(message);
    }
    dispatch(error(message));
  }
};
