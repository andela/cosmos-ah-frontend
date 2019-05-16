import reducer from '../reducer';
import * as types from '../actionTypes';
import { initialState } from '../state';
import * as actions from '../actions';

test('should return the initialState', () => {
  expect(reducer(initialState, { type: undefined })).toEqual(initialState);
});

test('should alert success message', () => {
  const message = 'successful message';
  expect(reducer(initialState, actions.success(message))).toEqual({
    success: true,
    error: false,
    message,
  });
});

test('should alert error message', () => {
  const message = 'error message';
  expect(reducer(initialState, actions.error(message))).toEqual({
    success: false,
    error: true,
    message,
  });
});

test('should alert clear message', () => {
  expect(reducer(initialState, actions.clear())).toEqual({});
});
