import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from './actionTypes';
import { initialState } from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signin: action.payload
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        signin: action.payload
      };
    default:
      return state;
  }
};
