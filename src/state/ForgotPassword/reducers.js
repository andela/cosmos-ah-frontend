import { initialState } from './state';
import { FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE } from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        ...state.forgotPassword,
        message: action.payload,
        error: null
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        ...state.forgotPassword,
        error: action.payload
      };
    default:
      return state;
  }
};
