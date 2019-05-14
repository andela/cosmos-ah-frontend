import { userForgotPassword } from '../../lib/forgotPassword';
import { FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, LOADING } from './actionTypes';

export const forgotPasswordSuccess = userEmail => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: userEmail
});
export const forgotPasswordFailure = userEmailError => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload: userEmailError
});

export const loading = loadingState => ({
  type: LOADING,
  payload: { loadingState }
});

export const forgotPasswordAction = email => async dispatch => {
  try {
    dispatch(loading(true));
    const forgotPassword = await userForgotPassword(email);
    dispatch(loading(false));
    dispatch(forgotPasswordSuccess(forgotPassword.data));
  } catch (error) {
    dispatch(loading(false));
    dispatch(forgotPasswordFailure(error.response.data.message));
  }
};
