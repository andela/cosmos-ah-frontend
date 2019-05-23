import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import ForgotPassword from '../ForgotPassword';

let mockStore = reduxStore();

let store = mockStore({
  userPassword: {
    forgotPassword: {
      message: '',
      error: '',
    }
  }
});

afterEach(cleanup);

test('<ForgotPassword /> component', () => {
  const forgotPasswordPage = render(<Provider store={store}><BrowserRouter><ForgotPassword /></BrowserRouter></Provider>);
  expect(forgotPasswordPage).toBeTruthy();
  expect(forgotPasswordPage.getByText('RESET PASSWORD').tagName).toBe('BUTTON');
  expect(forgotPasswordPage.getByText('Back to Sign In').tagName).toBe('A');
});

test('renders the Form', () => {
  const { getByPlaceholderText } = render(<Provider store={store}><BrowserRouter><ForgotPassword /></BrowserRouter></Provider>);
  expect(getByPlaceholderText('YOUR EMAIL ADDRESS')).toBeTruthy();
});

test('renders the Header tag', () => {
  const forgotPasswordPage = render(<Provider store={store}><BrowserRouter><ForgotPassword /></BrowserRouter></Provider>);
  const H1Tag = forgotPasswordPage.getByText('Reset Password');
  const H4Tag = forgotPasswordPage.getByText('Enter Your Email Address And We Will Email You With Instructions');
  expect(H1Tag.textContent).toBe('Reset Password');
  expect(H4Tag.textContent).toBe('Enter Your Email Address And We Will Email You With Instructions');
  
});

test('renders the Component', () => {
  const forgotPasswordPage = render(<Provider store={store}><BrowserRouter><ForgotPassword /></BrowserRouter></Provider>);
  expect(forgotPasswordPage).toMatchSnapshot();
});
