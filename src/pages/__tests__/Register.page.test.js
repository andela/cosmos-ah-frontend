import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import Register from '../Register';
import authReducer from '../../state/auth/reducer';

afterEach(cleanup);
const store = createStore(authReducer);
test('<Register /> component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  expect(getByText('Sign Up').tagName).toBe('BUTTON');
  expect(getByText('Sign In').tagName).toBe('BUTTON');
});

test('renders the Form', () => {
  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  expect(getByPlaceholderText('Full Name')).toBeTruthy();
  expect(getByPlaceholderText('Username')).toBeTruthy();
  expect(getByPlaceholderText('Email Address')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();
  expect(getByPlaceholderText('Confirm Password')).toBeTruthy();
});

test('renders the Header', () => {
  const registrationPage = render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  const Header = registrationPage.getByText('Create Your Account');
  expect(Header.textContent).toBe('Create Your Account');
});

test('renders the Component', () => {
  const registrationPage = render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  expect(registrationPage.getAllByPlaceholderText('Full Name')).toMatchSnapshot();
  expect(registrationPage.getByText('Sign Up').tagName).toMatchSnapshot();
});
