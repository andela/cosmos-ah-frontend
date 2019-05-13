import jwtDecode from 'jwt-decode';
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
  SIGN_IN_SUCCESS, SIGN_IN_ERROR, LOADING, SOCIAL_AUTH,
} from './actionTypes';
import axios from '../../lib/axios';
import { decodeToken, setLocalStorage } from '../../lib/auth';

export const request = () => ({
  type: REGISTER_REQUEST,
});

export const success = user => ({
  type: REGISTER_SUCCESS,
  user,
});

export const failure = error => ({
  type: REGISTER_FAILURE,
  error,
});

export const register = newUser => async dispatch => {
  try {
    dispatch(request());
    const registeredUser = await axios.post('/signup', newUser);
    const { token } = registeredUser.data.data;
    const decodedToken = decodeToken(token);
    dispatch(success(decodedToken));
    setLocalStorage('token', token);
  } catch (error) {
    dispatch(failure(error));
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
    setLocalStorage(login.data.data.token);
    dispatch(signInSuccess(decoded));
    redirect.push('/feeds');
  } catch (error) {
    dispatch(signInError(error.response.data));
  }
};

export const socialAuth = (token, redirect) => dispatch => {
  try {
    setLocalStorage(token, 'loggedinUser');
    const decodedToken = decodeToken(token);
    dispatch(getSocialAuth(decodedToken));
    redirect.push('/');
  } catch (error) {
    dispatch(signInError(error));
    redirect.push('/login');
  }
};
