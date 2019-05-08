import configureStore from 'redux-mock-store';
import {
  signInSuccess,
  signInError,
  successDispatch,
  errorDispatch
} from '../lib/auth';

const middlewares = [];
const mockStore = configureStore(middlewares);

const signIn = {
  data: 'ok',
};

const signInErrorData = {
  data: 'error',
};

const signinSuccessAction = signInSuccess(signIn);
const signinErrorAction = signInError(signInErrorData);

it('should dispatch signin success action', () => {
  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(signinSuccessAction);

  const actions = store.getActions();
  const expectedPayload = {
    payload: {
      data: 'ok',
    },
    type: 'SIGN_IN_SUCCESS',
  };
  expect(actions).toEqual([expectedPayload]);
});

it('should dispatch signin error action', () => {
  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(signinErrorAction);

  const actions = store.getActions();
  const expectedPayload = {
    payload: {
      data: 'error',
    },
    type: 'SIGN_IN_ERROR',
  };
  expect(actions).toEqual([expectedPayload]);
});

test('Test the Dispatch success function', () => {
  const mock = jest.fn().mockImplementation(successDispatch());
  mock.mockReturnValue("decoded");
  expect(mock('token')).toBe("decoded");
  expect(mock).toHaveBeenCalledWith('token');
});

test('Test the Dispatch error function', () => {
    const mock = jest.fn().mockImplementation(errorDispatch());
    mock.mockReturnValue("errorObject");
    expect(mock('errorPayload')).toBe("errorObject");
    expect(mock).toHaveBeenCalledWith('errorPayload');
  });
