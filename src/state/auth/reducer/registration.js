import { initialState } from '../state';
import { userConstants } from '../actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return { registered: true };
    case userConstants.REGISTER_FAILURE:
      return { registered: false };
    default:
      return state;
  }
};
