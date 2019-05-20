import swal from 'sweetalert';
import axios from '../../lib/axios';
import {
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE
} from './actionTypes';

export const forgotPasswordSuccess = userEmail => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: userEmail
});
export const forgotPasswordFailure = userEmailError => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload: userEmailError
});

export const resetPasswordSuccess = form => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: form
});
export const resetPasswordFailure = error => ({
  type: RESET_PASSWORD_FAILURE,
  payload: error
});

export const loading = loadingState => ({
  type: LOADING,
  payload: { loadingState }
});

export const forgotPasswordAction = email => async dispatch => {
  try {
    dispatch(loading(true));
    const forgotPassword = await axios.post('/forgot-password', { email });
    dispatch(loading(false));
    dispatch(forgotPasswordSuccess(forgotPassword.data));
  } catch (error) {
    dispatch(loading(false));
    dispatch(forgotPasswordFailure(error.response.data.message));
  }
};

export const resetPasswordAction = (form, resetToken, redirect) => async dispatch => {
  try {
    dispatch(loading(true));
    const resetPassword = await axios.put(`/password-reset/${resetToken}`, { ...form, resetToken });
    dispatch(loading(false));
    dispatch(resetPasswordSuccess(resetPassword.data));
    swal({
      title: 'Password Changed',
      text: resetPassword.data.data,
      icon: 'success',
      button: 'Ok'
    });
    redirect.push('/login');
  } catch (error) {
    dispatch(loading(false));
    dispatch(resetPasswordFailure(error.response));
  }
};
