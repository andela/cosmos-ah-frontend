import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import { Login } from '../Login';


afterEach(cleanup);

const props = {
  loginState: {
    data: "invalid email"
  }
}

test('Renders <Login />', () => {
  const LoginComponent = render(<BrowserRouter><Login {...props}/></BrowserRouter>);
  expect(LoginComponent).toBeTruthy();
});

test('Renders <Login /> form', () => {
  const { getByPlaceholderText } = render(<BrowserRouter><Login {...props} /></BrowserRouter>);
  expect(getByPlaceholderText('Email Address')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();
});


test('render <Login />  Login Header', () => {
  const LoginHeader = render(
  <BrowserRouter><Login { ...props } /></BrowserRouter>);
  const HeaderText = LoginHeader.getByText('Sign In');
  expect(HeaderText.textContent).toBe('Sign In');
});
