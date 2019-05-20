
import jwtDecode from 'jwt-decode';
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
  SIGN_IN_SUCCESS, SIGN_IN_ERROR, LOADING, SOCIAL_AUTH,
} from './actionTypes';

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
    setLocalStorage('ah-token', token);
  } catch (err) {
    dispatch(failure(err));
    let { message } = err.response.data;
    if (typeof message === 'object') {
      message = Object.values(message);
    }
    dispatch(error(message));
  }
};

export const signInSuccess = signin => ({
  type: SIGN_IN_SUCCESS,
  payload: signin
});

export const getSocialAuth = decodedToken => (
  {
    type: SOCIAL_AUTH,
    payload: decodedToken
  }
);

export const signInError = signinError => ({
  type: SIGN_IN_ERROR,
  payload: signinError
});

export const loading = loadingState => ({
  type: LOADING,
  payload: { loadingState }
});

export const loginAction = (formData, redirect) => async dispatch => {
  try {
    dispatch(loading(true));
    const login = await axios.post('/login', formData);
    const decoded = decodeToken(login.data.data.token);
    setLocalStorage('ah-token', login.data.data.token);
    dispatch(signInSuccess(decoded));
    redirect.push('/feeds');
  } catch (err) {
    dispatch(signInError(err.response.data));
  }
};

export const socialAuth = (token, redirect) => dispatch => {
  try {
    setLocalStorage('ah-token', token);
    const decodedToken = decodeToken(token);
    dispatch(getSocialAuth(decodedToken));
    redirect.push('/feeds');
  } catch (err) {
    dispatch(signInError(err));
    redirect.push('/login');
  }
};
