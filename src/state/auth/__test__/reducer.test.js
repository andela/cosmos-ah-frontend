import reducer from '../reducer';
import * as types from '../actionTypes';
import { success, request, failure } from '../action';

describe('Auth Reducer', () => {
  const user = {
    fullName: 'test test',
    username: 'testUser',
    email: 'test@andela.com',
    password: 'Secret@1234',
  };

  const error = { error: 'something happened' };
  it('Should return the Initial State', () => {
    expect(reducer(undefined, { registering: false, signin: {}, }))
      .toEqual({ registering: false, signin: {}, });
  });
  it('Should make request', () => {
    expect(reducer({}, request())).toEqual({
      registering: true,
    });
  });
  it('Should make success', () => {
    expect(reducer({}, success(user))).toEqual({
      registering: false,
      registered: true,
      current_user: user,
    });
  });
  it('Should make failure', () => {
    expect(reducer({}, failure(error))).toEqual({
      registering: false,
      registered: false,
      error,
    });
  });
});
