import * as actions from '../actions';
import * as types from '../actionTypes';

describe('Forgot Password Action Creators', () => {
  const payload = {
    email: 'test@andela.com',
  };

  it('Should create action to send request for forgot password', () => {
    const result = {
      type: types.FORGOT_PASSWORD_SUCCESS,
      payload,
    };
    expect(actions.forgotPasswordSuccess(payload)).toEqual(result);
  });

  it('Should start loader', () => {
    const result = {
      type: types.LOADING,
      payload: { loadingState: true }
    };
    expect(actions.loading(true)).toEqual(result);
  });

  it('Should dispatch failure action', () => {
    let error;
    const result = {
      type: types.FORGOT_PASSWORD_FAILURE,
      error,
    };
    expect(actions.forgotPasswordFailure(error)).toEqual(result);
  });
});

describe('Reset Password Action Creators', () => {
  const payload = {
    password: 'Password@1',
    password_confirmation: 'Password@1'
  };

  it('Should create action to send request for password reset', () => {
    const result = {
      type: types.RESET_PASSWORD_SUCCESS,
      payload,
    };
    expect(actions.resetPasswordSuccess(payload)).toEqual(result);
  });

  it('Should dispatch failure action for password reset', () => {
    let error;
    const result = {
      type: types.RESET_PASSWORD_FAILURE,
      error,
    };
    expect(actions.resetPasswordFailure(error)).toEqual(result);
  });
});
