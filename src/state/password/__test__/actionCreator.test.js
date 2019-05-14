import * as actions from '../actions';
import * as types from '../actionTypes';

describe('Forgot Password Action Creators', () => {
  const userEmail = {
    email: 'test@andela.com',
  };

  it('Should create action to send request for forgot password', () => {
    const expectedAction = {
      type: types.FORGOT_PASSWORD_SUCCESS,
      payload: userEmail,
    };
    expect(actions.forgotPasswordSuccess(userEmail)).toEqual(expectedAction);
  });

  it('Should start loader', () => {
    const expectedAction = {
      type: types.LOADING,
      payload: { loadingState: true }
    };
    expect(actions.loading(true)).toEqual(expectedAction);
  });

  it('Should dispatch failure action', () => {
    let payload;
    const expectedAction = {
      type: types.FORGOT_PASSWORD_FAILURE,
      payload,
    };
    expect(actions.forgotPasswordFailure(payload)).toEqual(expectedAction);
  });
});
