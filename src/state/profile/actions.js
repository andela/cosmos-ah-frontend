import { getUserProfile } from '../../lib/profile';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './actionTypes';

export const getUserProfileSuccess = profile => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile
});
export const getUserProfileFailure = () => ({
  type: GET_PROFILE_FAILURE,
});

export default () => async dispatch => {
  try {
    const data = await getUserProfile();
    dispatch(getUserProfileSuccess(data));
  } catch (error) {
    dispatch(getUserProfileFailure());
  }
};
