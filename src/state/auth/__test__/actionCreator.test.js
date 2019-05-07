import * as actions from '../action';
import * as types from '../actionTypes';

describe('Auth Action Creators', () => {
  const user = {
    fullName: 'test test',
    username: 'testUser',
    email: 'test@andela.com',
    password: 'Secret@1234',
  };
  it('Should make request', () => {
    const expectedAction = {
      type: types.REGISTER_REQUEST,
    };
    expect(actions.request(user)).toEqual(expectedAction);
  });

  it('Should make success', () => {
    const expectedAction = {
      type: types.REGISTER_SUCCESS,
      user,
    };
    expect(actions.success(user)).toEqual(expectedAction);
  });
  it('Should make failure', () => {
    const error = 'token';
    const expectedAction = {
      type: types.REGISTER_FAILURE,
      error,
    };
    expect(actions.failure(error)).toEqual(expectedAction);
  });
});
