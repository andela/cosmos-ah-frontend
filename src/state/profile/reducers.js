import { GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_FOLLOWINGS_SUCCESS,
  GET_FOLLOWINGS_FAILURE,
  FOLLOW_UNFOLLOW_SUCCESS,
  FOLLOW_UNFOLLOW_FAILURE
} from './actionTypes';

import { initialState } from './state';

export default (state = initialState, action) => {
  if (action === undefined || !action) { return state; }
  const { type } = action;
  switch (type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loadedData: action.payload,
        isLoading: true,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case GET_FOLLOWINGS_SUCCESS:
      return {
        ...state,
        followings: action.payload,
      };
    case GET_FOLLOWINGS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case FOLLOW_UNFOLLOW_SUCCESS:
      return {
        ...state,
        error: action.payload
      };
    case FOLLOW_UNFOLLOW_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
