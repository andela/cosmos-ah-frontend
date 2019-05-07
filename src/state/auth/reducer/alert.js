import { initialState } from '../state';
import { alertActions } from '../actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case alertActions.success:
      return {
        type: 'alert-success',
        message: action.message,
      };
    case alertActions.error:
      return {
        type: 'alert-danger',
        message: action.message,
      };
    case alertActions.clear:
      return {};
    default:
      return state;
  }
};
