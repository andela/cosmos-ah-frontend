import { userConstants, alertConstants } from '../actionTypes';
import { userService } from '../../../lib/user';
import { alertActions } from './alert';

export const request = user => ({
  type: userConstants.REGISTER_REQUEST,
  user,
});

export const success = user => ({
  type: userConstants.REGISTER_SUCCESS,
  user,
});

export const failure = error => ({
  type: userConstants.REGISTER_FAILURE,
  error,
});

export const register = newUser => dispatch => {
  dispatch(request(newUser));
  userService
    .register(newUser)
    .then(registeredUser => {
      if (registeredUser.status === 201) {
        dispatch(success());
        dispatch(alertActions.success('Registration Successful'));
      }
    })
    .catch(error => {
      dispatch(failure());
      dispatch(alertActions.error(error.toString()));
    });
};
