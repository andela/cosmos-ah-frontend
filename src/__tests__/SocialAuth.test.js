/* eslint-disable no-unused-expressions */

import { cleanup } from 'react-testing-library';
import { socialAuth, getSocialAuth } from '../state/auth/actions';
import socialReducer from '../state/auth/reducers';
import { initialState } from '../state/auth/state';

const testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI4MmM5M2JjLWQwYWYtNGU1NC1hYmNmLWY5YTI1YjgwOGM2ZiIsImVtYWlsIjoiYWRlYmFqby5vbHV3YXNleWlAeWFob28uY29tIiwicm9sZSI6ImF1dGhvciIsInVzZXJuYW1lIjoiYWRlYmFqby5vbHV3YXNleWlAeWFob28uY29tIiwiaWF0IjoxNTU3MzM3NjI5LCJleHAiOjE1NTc0MjQwMjl9.M11NaSQd2HSdYSEVDBG5WSO7jfSTccSsRyjBvCuZic0';
afterEach(cleanup);

describe('action test', () => {
  it('dispatch acition to social', () => {
    const action = getSocialAuth(testToken);
    expect(action.type).toEqual('SOCIAL_AUTH');
    expect(action.payload).isObject;
  });

  it('test social dispatcher', async () => {
    const action = await socialAuth(testToken)(socialAuth);
    expect(action);
  });
});

describe('social reducer test', () => {
  it('test default swich case', () => {
    const state = socialReducer(initialState, 'WRONG_TYPE');
    expect(state.auth.isObject);
  });
  it('test social auth case', () => {
  });
});
