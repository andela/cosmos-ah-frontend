import { Signin } from '../../lib/signin';
import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from './actionTypes';
import { successDispatch, errorDispatch } from '../../lib/auth';

export const signInSuccess = signin => ({
  type: SIGN_IN_SUCCESS,
  payload: signin
});

export const signInError = signinError => ({
  type: SIGN_IN_ERROR,
  payload: signinError
});

export const signin = async formData => {
  try {
    const login = await Signin(formData);
    successDispatch(login.data.data.token);
  } catch (error) {
    errorDispatch(error.response);
  }
};
