import reducer from '../reducer';
import * as types from '../actionTypes';
import {
  forgotPasswordSuccess, forgotPasswordFailure, resetPasswordSuccess, resetPasswordFailure
} from '../actions';

const initialState = {
  forgotPassword: {
    message: '',
    error: '',
  },
  resetPassword: {
    message: '',
    error: '',
  }
};

const user = {
  email: 'test@andela.com'
};


describe('forgot password reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should make request for password reset', () => {
    expect(reducer({}, forgotPasswordSuccess(user))).toEqual({
      forgotPassword: {
        error: null,
        message: {
          email: 'test@andela.com'
        },
      },
    });
  });
  it('forgotpassword failure', () => {
    expect(reducer({}, forgotPasswordFailure({}))).toEqual({
      forgotPassword: {
        error: {},
      },
    });
  });
});

describe('reset password reducer', () => {
  const payload = {
    password: 'Password@1',
    password_confirmation: 'Password@1',
  };
  it('reset password', () => {
    expect(reducer({}, resetPasswordSuccess(payload))).toEqual({
      resetPassword: {
        error: null,
        message: {
          password: 'Password@1',
          password_confirmation: 'Password@1',
        },
      },
    });
  });
  it('reset password failure', () => {
    expect(reducer({}, resetPasswordFailure({}))).toEqual({
      resetPassword: {
        error: {},
      },
    });
  });
});
