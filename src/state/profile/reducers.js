import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './actionTypes';
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
    default:
      return state;
  }
};
