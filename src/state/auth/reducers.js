import { SOCIAL_AUTH } from './actionTypes';
import { initialState } from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case SOCIAL_AUTH:
      return {
        ...state,
        auth: action.payload
      };
    default:
      return state;
  }
};
