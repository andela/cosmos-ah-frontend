import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import ResetPassword from '../ResetPassword';

afterEach(cleanup);

let mockStore = reduxStore();

let store = mockStore({
  userPassword: {
    resetPassword: {
      message: '',
      error: '',
    }
  }
});

test('<ResetPassword /> component', () => {
  const resetPasswordPage = render(<Provider store={store}><BrowserRouter><ResetPassword /></BrowserRouter></Provider>
  );
  expect(resetPasswordPage).toBeTruthy();
  expect(resetPasswordPage.getByText('CONTINUE').tagName).toBe('BUTTON');
});

test('renders the Form', () => {
  const { getByPlaceholderText } = render(<Provider store={store}><BrowserRouter><ResetPassword /></BrowserRouter></Provider>
  );
  expect(getByPlaceholderText('Enter Your New Password')).toBeTruthy();
  expect(getByPlaceholderText('Confirm Your Password')).toBeTruthy();
});

test('renders the Header', () => {
  const resetPasswordPage = render(<Provider store={store}><BrowserRouter><ResetPassword /></BrowserRouter></Provider>
  );
  const Header = resetPasswordPage.getByText('Reset Password');
  expect(Header.textContent).toBe('Reset Password');
});

test('renders the Component', () => {
  const resetPasswordPage = render(<Provider store={store}><BrowserRouter><ResetPassword /></BrowserRouter></Provider>
  );
  expect(resetPasswordPage.getAllByPlaceholderText('Enter Your New Password')).toMatchSnapshot();
  expect(resetPasswordPage.getByText('CONTINUE').tagName).toMatchSnapshot();
});
