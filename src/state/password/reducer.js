import { initialState } from './state';
import { FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, LOADING } from './actionTypes';

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
        forgotPassword: action.payload
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          error: action.payload
        },
      };
    default:
      return state;
  }
};
