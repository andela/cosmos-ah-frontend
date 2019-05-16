import * as actions from '../actions';
import * as types from '../actionTypes';

test('should Alert Success message', () => {
  const message = 'success message';
  const expectedAction = {
    type: types.SUCCESS,
    message,
  };
  expect(actions.success(message)).toEqual(expectedAction);
});

test('should alert failure message', () => {
  const message = 'Something happened';
  const expectedAction = {
    type: types.ERROR,
    message,
  };
  expect(actions.error(message)).toEqual(expectedAction);
});

test('should clear message', () => {
  const expectedAction = {
    type: types.CLEAR,
  };
  expect(actions.clear()).toEqual(expectedAction);
});
