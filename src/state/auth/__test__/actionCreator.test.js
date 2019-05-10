import * as actions from '../actions';
import * as types from '../actionTypes';

describe('Auth Action Creators', () => {
  const user = {
    email: 'test test',
    password: 'testUser',
  };
  it('should test success action', () => {
    const expectedAction = {
      type: types.SIGN_IN_SUCCESS,
      payload: user,
    };
    expect(actions.signInSuccess(user)).toEqual(expectedAction);
  });
  it('Should test failure action', () => {
    const error = 'token';
    const expectedAction = {
      type: types.SIGN_IN_ERROR,
      payload: error,
    };
    expect(actions.signInError(error)).toEqual(expectedAction);
  });

  it('Should test loading action', () => {
    const loading = true;
    const expectedAction = {
      type: types.LOADING,
      payload: { loadingState: loading }
    };
    expect(actions.loading(loading)).toEqual(expectedAction);
  });
});
