import React from 'react';
import { render, cleanup, getByText } from 'react-testing-library';
import Login from '../pages/Login';

afterEach(cleanup);

test('Renders <Login />', () => {
  const LoginComponent = render(<Login />);
  expect(LoginComponent).toBeTruthy();
  expect(LoginComponent).toMatchSnapshot();
});

test('Renders <Login /> form', () => {
  const { getByPlaceholderText } = render(<Login />);
  expect(getByPlaceholderText('Email Address')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();
});


test('render <Login />  Login Header', () => {
  const LoginHeader = render(<Login />);
  const HeaderText = LoginHeader.getByText('Login');
  expect(HeaderText.textContent).toBe('Login');
});
