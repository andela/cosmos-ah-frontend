import { initialState } from './state';
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
  SIGN_IN_SUCCESS, LOADING, SIGN_IN_ERROR, SOCIAL_AUTH,
  SIGN_OUT
} from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, registering: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        registered: true,
        signin: action.user,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        registered: false,
        error: action.error
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signin: action.payload
      };
    case LOADING:
      return {
        ...state,
        signin: action.payload
      };
    case SOCIAL_AUTH:
      return {
        ...state,
        signin: action.payload
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        signin: action.payload,
        login: action.payload
      };
    case SIGN_OUT:
    default:
      return state;
  }
};
