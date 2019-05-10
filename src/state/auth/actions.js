import axios from '../../lib/axios';
import { decodeLoginToken } from '../../lib/auth';
import {
  SIGN_IN_SUCCESS, SIGN_IN_ERROR, LOADING, SOCIAL_AUTH
} from './actionTypes';
import { decodeToken, setLocalStorage } from '../../lib/social';

export const signInSuccess = signin => ({
  type: SIGN_IN_SUCCESS,
  payload: signin
});

export const signInError = signinError => ({
  type: SIGN_IN_ERROR,
  payload: signinError
});

export const loading = loadingState => ({
  type: LOADING,
  payload: { loadingState }
});

export const loginAction = formData => async dispatch => {
  try {
    dispatch(loading(true));
    const login = await axios.post('/login', formData);
    const decoded = decodeLoginToken(login.data.data.token);
    dispatch(signInSuccess(decoded));
  } catch (error) {
    dispatch(signInError(error.response.data));
  }
};


export const getSocialAuth = decodedToken => (
  {
    type: SOCIAL_AUTH,
    payload: decodedToken
  }
);

export const socialAuth = token => dispatch => {
  try {
    localStorage.setItem('ah-token', token);
    const decodedToken = decodeToken(token);
    dispatch(getSocialAuth(decodedToken));
  } catch (error) {
    dispatch(signInError(error));
  }
};
