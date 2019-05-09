import axios from '../../lib/axios';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './actionTypes';

export const getUserProfileSuccess = profile => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile
});

export const getUserProfileFailure = () => ({
  type: GET_PROFILE_FAILURE,
});

export const getProfile = () => async dispatch => {
  try {
    const { data: { data: { user } } } = await axios.get('/profile/view/979eaa2e-5b8f-4103-8192-4639afae2ba9');
    dispatch(getUserProfileSuccess(user));
  } catch (error) {
    dispatch(getUserProfileFailure());
  }
};
