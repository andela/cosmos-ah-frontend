import reducer from '../reducer';
import * as types from '../actionTypes';
import { initialState } from '../state';

const state = {
  forgotPassword: {
    message: '',
    error: '',
  }
};

describe('forgot password reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it('should send password reset instruction', () => {
    expect(
      reducer(state, {
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: 'test@andela.com'
      })
    ).toEqual(
      {
        forgotPassword: {
          message: 'test@andela.com',
          error: null,
        }
      }
    );
  });
});
