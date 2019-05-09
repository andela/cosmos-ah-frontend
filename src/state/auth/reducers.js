import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, LOADING } from './actionTypes';
import { initialState } from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        login: action.payload
      };
    case LOADING:
      return {
        ...state,
        login: action.payload
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        login: action.payload
      };
    default:
      return state;
  }
};
