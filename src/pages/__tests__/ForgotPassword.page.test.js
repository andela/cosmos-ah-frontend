import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import ForgotPassword from '../ForgotPassword';

afterEach(cleanup);

test('<ForgotPassword /> component', () => {
  const forgotPasswordPage = render(<BrowserRouter><ForgotPassword /></BrowserRouter>);
  expect(forgotPasswordPage).toBeTruthy();
  expect(forgotPasswordPage.getByText('RESET PASSWORD').tagName).toBe('BUTTON');
  expect(forgotPasswordPage.getByText('Back to Login').tagName).toBe('A');
});

test('renders the Form', () => {
  const { getByPlaceholderText } = render(<BrowserRouter><ForgotPassword /></BrowserRouter>);
  expect(getByPlaceholderText('YOUR EMAIL ADDRESS')).toBeTruthy();
});

test('renders the Header tag', () => {
  const forgotPasswordPage = render(<BrowserRouter><ForgotPassword /></BrowserRouter>);
  const H1Tag = forgotPasswordPage.getByText('Forgot Password');
  const H4Tag = forgotPasswordPage.getByText('Enter Your Email Address And We Will Email You With Instructions');
  expect(H1Tag.textContent).toBe('Forgot Password');
  expect(H4Tag.textContent).toBe('Enter Your Email Address And We Will Email You With Instructions');
  
});

test('renders the Component', () => {
  const forgotPasswordPage = render(<BrowserRouter><ForgotPassword /></BrowserRouter>);
  expect(forgotPasswordPage).toMatchSnapshot();
});
