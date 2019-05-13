import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { cleanup } from 'react-testing-library';

import {
  register, success, failure, socialAuth, getSocialAuth, signInError
} from '../action';
import * as types from '../actionTypes';
import axios from '../../../lib/axios';
import { decodeToken } from '../../../lib/auth';

afterEach(cleanup);
const mockStore = configureMockStore([thunk]);
const store = mockStore({});
const mockData = {
  status: 'success',
  data: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRlOGQxZDRmLTE0MjItNGE1My1iY2MwLTk3ZDFjMmI2ZTMwYiIsImZ1bGxOYW1lIjoidGVzdCB0ZXN0IiwiYmlvIjpudWxsLCJlbWFpbCI6InRlc3QudGVzdEBhbmRlbGEuY29tIiwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsInJvbGUiOiJhdXRob3IiLCJpYXQiOjE1NTc0MjI2NTgsImV4cCI6MTU1NzUwOTA1OH0.4rnQUmlmyetfER8HnOx3p-yNr2gjnzaV9uSRklmQg24',
  },
};
const newUser = {
  fullName: 'test test',
  email: 'test@andela.com',
  username: 'testUser',
  password: 'Secret@1234',
};
const signInErrorAction = { type: 'SIGN_IN_ERROR' };
const user = decodeToken(mockData.data.token);
const historyMock = { push: jest.fn() };

describe('Auth Action', () => {
  it('Create User when signup action is successful', async () => {
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: mockData }));

    await store.dispatch(register(newUser));
    expect(store.getActions()[1]).toEqual(success(user));
  });
  it('do not Create User when signup action is not successful', async () => {
    const error = { status: 'fail', message: 'request failed' };
    axios.post = jest.fn().mockReturnValue(Promise.reject(error));

    await store.dispatch(failure(error));
    expect(store.getActions()[2].type).toEqual(failure(error).type);
  });
});

describe(' social auth action', () => {
  it('social redirect success', async () => {
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: mockData }));
    await store.dispatch(socialAuth(mockData.data.token));
    expect(store.getActions()[3]).toEqual(getSocialAuth(user));
  });
  it('social redirect failure', async () => {
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: 'mockData' }));
    await store.dispatch(socialAuth('mockData.data.token'));
    expect(store.getActions()[4].type).toEqual(signInError(signInErrorAction).type);
  });
});
