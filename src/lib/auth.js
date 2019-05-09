import jwtDecode from 'jwt-decode';
import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../state/auth/actionTypes';

export const signInSuccess = signin => ({
  type: SIGN_IN_SUCCESS,
  payload: signin
});

export const signInError = signinError => ({
  type: SIGN_IN_ERROR,
  payload: signinError
});

export const successDispatch = token => dispatch => {
  const decoded = jwtDecode(token);
  dispatch(signInSuccess(decoded));
  localStorage.setItem('authorsHavenJWT', token);
};

export const errorDispatch = errorObject => dispatch => {
  dispatch(signInError(errorObject));
};
