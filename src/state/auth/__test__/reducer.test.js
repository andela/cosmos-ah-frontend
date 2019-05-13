import reducer from '../reducer';
import * as types from '../actionTypes';
import {
  success, request, failure, getSocialAuth, signInError
} from '../action';

describe('Auth Reducer', () => {
  const user = {
    fullName: 'test test',
    username: 'testUser',
    email: 'test@andela.com',
    password: 'Secret@1234',
  };

  const error = { error: 'something happened' };
  it('Should return the Initial State', () => {
<<<<<<< HEAD
    expect(reducer(undefined, { registering: false, signin: {}, }))
      .toEqual({ registering: false, signin: {}, });
=======
    expect(reducer(undefined, { registering: false })).toEqual({ registering: false, login: {} });
>>>>>>> social media redirect
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
  it('social authentication success', () => {
    expect(reducer({}, getSocialAuth(user))).toEqual({
      login: user
    });
  });
  it('social authentication failure', () => {
    expect(reducer({}, signInError({}))).toEqual({
      login: {}
    });
  });
});
