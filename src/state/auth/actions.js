/* eslint-disable no-undef */
import { Signin } from '../../lib/signin';
import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from './actionTypes';

export const signInSuccess = signin => ({
  type: SIGN_IN_SUCCESS,
  payload: signin
});

export const signInError = signin => ({
  type: SIGN_IN_ERROR,
  payload: signin
});

export const signin = formData => async dispatch => {
  try {
    const login = await Signin(formData);
    dispatch(signInSuccess(login.data.data.token));
    localStorage.authorsHavenJWTToken = login.data.data.token;
  } catch (error) {
    dispatch(signInError(login.error));
  }
};
