import axios from '../../lib/axios';
import { decodeToken } from '../../lib/auth';
import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from './actionTypes';

export const signInSuccess = signin => ({
  type: SIGN_IN_SUCCESS,
  payload: signin
});

export const signInError = signinError => ({
  type: SIGN_IN_ERROR,
  payload: signinError
});

export const loginAction = formData => async dispatch => {
  try {
    const login = await axios.post('/login', formData);
    const decoded = decodeToken(login.data.data.token);
    dispatch(signInSuccess(decoded));
  } catch (error) {
    dispatch(signInError(error.response.data));
  }
};
