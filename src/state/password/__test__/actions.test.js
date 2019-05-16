import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  forgotPasswordSuccess,
  forgotPasswordFailure,
  forgotPasswordAction,
  resetPasswordSuccess,
  resetPasswordFailure,
  resetPasswordAction
} from '../actions';
import axios from '../../../lib/axios';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});
const userEmail = { email: 'test@andela.com' };
const forgetPasswordResponse = { status: 'success', data: 'Password reset instruction was successfully sent to test@andela.com' };
const form = { password: 'Password@1', password_confirmation: 'Password@1' };
const resetPasswordResponse = { status: 'success', data: 'Password was successfully updated!' };


describe('Forgot Password Action', () => {
  it('Send message for successful request', async () => {
    axios.post = jest.fn().mockReturnValue(Promise.resolve(forgetPasswordResponse));

    await store.dispatch(forgotPasswordAction(userEmail.email));
    expect(store.getActions()[2]).toEqual(forgotPasswordSuccess(forgetPasswordResponse.data));
  });

  it('Return error for unsuccessful opearation', async () => {
    const error = { status: 'fail', message: 'Account associated with this email cannot be found' };
    axios.post = jest.fn().mockReturnValue(Promise.reject(error));

    await store.dispatch(forgotPasswordFailure(error));
    expect(store.getActions()[3].type).toEqual(forgotPasswordFailure(error).type);
  });
});

describe('Reset Password Action', () => {
  it('Send message for successful request', async () => {
    axios.put = jest.fn().mockReturnValue(Promise.resolve(resetPasswordResponse));

    await store.dispatch(resetPasswordAction(form.password, form.password_confirmation));
    expect(store.getActions()).toEqual(resetPasswordSuccess(resetPasswordResponse.data));
  });

  it('Return error for unsuccessful opearation', async () => {
    const error = { status: 'fail', message: 'Invalid verification token, kindly re-authenticate!' };
    axios.put = jest.fn().mockReturnValue(Promise.reject(error));

    await store.dispatch(resetPasswordFailure(error));
    expect(store.getActions()).toEqual(resetPasswordFailure(error).type);
  });
});
