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
    expect(reducer(undefined, {
      registering: false, login: {}, signin: {}, auth: {}
    })).toEqual({
      registering: false, login: {}, signin: {}, auth: {}
    });
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
      signin: user,
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
      signin: user
    });
  });
  it('social authentication failure', () => {
    expect(reducer({}, signInError({}))).toEqual({
      login: {},
      signin: {}
    });
  });
});
