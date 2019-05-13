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

describe('social auth action creators', () => {
  it('dispatch success if token present', () => {
    const testSocialToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI4MmM5M2JjLWQwYWYtNGU1NC1hYmNmLWY5YTI1YjgwOGM2ZiIsImVtYWlsIjoiYWRlYmFqby5vbHV3YXNleWlAeWFob28uY29tIiwicm9sZSI6ImF1dGhvciIsInVzZXJuYW1lIjoiYWRlYmFqby5vbHV3YXNleWlAeWFob28uY29tIiwiaWF0IjoxNTU3MzM3NjI5LCJleHAiOjE1NTc0MjQwMjl9.M11NaSQd2HSdYSEVDBG5WSO7jfSTccSsRyjBvCuZic0';
    const action = actions.getSocialAuth(testSocialToken);
    expect(action.type).toEqual(types.SOCIAL_AUTH);
  });
  it('dispatch error for wrong token', () => {
    const action = actions.signInError('WRONG_TOKEN');
    expect(action.type).toEqual(types.SIGN_IN_ERROR);
  });
});
