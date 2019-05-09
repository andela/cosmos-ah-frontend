import reducer from '../reducers';
import * as types from '../actionTypes';

describe('Auth Reducer', () => {
  const payload = {
    email: 'test test',
    password: 'testUser'
  };

  it('Should return the Initial State', () => {
    expect(reducer(undefined, {})).toEqual({ login: {} });
  });
  it('should test and return the error state', () => {
    expect(reducer({}, { type: types.SIGN_IN_ERROR, payload })).toEqual({
      login: payload
    });
  });
  it('should test and return the success state', () => {
    expect(reducer({}, { type: types.SIGN_IN_SUCCESS, payload })).toEqual({
      login: payload,
    });
  });
  it('should test and return the loading state', () => {
    expect(reducer({}, { type: types.LOADING, payload })).toEqual({
      login: payload,
    });
  });
});
