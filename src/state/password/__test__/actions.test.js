import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  forgotPasswordSuccess, forgotPasswordFailure, forgotPasswordAction
} from '../actions';
import axios from '../../../lib/axios';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});
const userEmail = { email: 'test@andela.com' };
const forgetPasswordResponse = { status: 'success', data: 'Password reset instruction was successfully sent to test@andela.com' };


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
