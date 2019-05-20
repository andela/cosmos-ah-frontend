import { initialState } from './state';
import {
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE
} from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          message: action.payload,
          error: null
        },
      };
    case LOADING:
      return {
        ...state,
        forgotPassword: action.payload,
        resetPassword: action.payload
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          error: action.payload
        },
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          message: action.payload,
          error: null
        },
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          error: action.payload
        },
      };
    default:
      return state;
  }
};
