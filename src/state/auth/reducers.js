import { SIGN_IN_SUCCESS } from './actionTypes';
import { initialState } from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signin: action.payload
      };
    default:
      return state;
  }
};
