import { userForgotPassword } from '../../lib/forgotPassword';
import { FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE } from './actionTypes';

export const forgotPasswordSuccess = userPassword => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: userPassword
});
export const forgotPasswordFailure = userPasswordError => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload: userPasswordError
});

export const forgotPasswordAction = () => async dispatch => {
  try {
    const forgotPassword = await userForgotPassword();
    dispatch(forgotPasswordSuccess(forgotPassword));
  } catch (error) {
    dispatch(forgotPasswordFailure(error.response.data));
  }
};
