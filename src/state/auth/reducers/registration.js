import { initialState } from '../state';
import { userConstants } from '../actionsTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};
