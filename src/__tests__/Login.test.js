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
  expect(getByPlaceholderText('E-mail address')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();
});


test('render <Login /> Header', () => {
  const LoginHeader = render(<Login />);
  const Header = LoginHeader.getByText('Login');
  expect(Header.textContent).toBe('Login');
});
