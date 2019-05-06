/* eslint-disable no-undef */
import { Signin } from '../../lib/signin';
import { SIGN_IN_SUCCESS } from './actionTypes';

export const signSuccess = signin => ({
  type: SIGN_IN_SUCCESS,
  payload: signin
});

export const signin = formData => async dispatch => {
  const login = await Signin(formData);
  dispatch(signSuccess(login.data.data.token));
  localStorage.authorsHavenJWTToken = login.data.data.token;
};
