import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Register from '../pages/Register.jsx';

afterEach(cleanup);

test('<Register /> component', () => {
  const registrationPage = render(<Register />);
  expect(registrationPage).toBeTruthy();
  expect(registrationPage.getByText('Sign Up').tagName).toBe('BUTTON');
  expect(registrationPage.getByText('Sign In').tagName).toBe('BUTTON');
});

test('renders the Form', () => {
  const { getByPlaceholderText } = render(<Register />);
  expect(getByPlaceholderText('Full Name')).toBeTruthy();
  expect(getByPlaceholderText('Username')).toBeTruthy();
  expect(getByPlaceholderText('Email Address')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();
  expect(getByPlaceholderText('Confirm Password')).toBeTruthy();
});

test('renders the Header', () => {
  const registrationPage = render(<Register />);
  const Header = registrationPage.getByText('Create Your Account');
  expect(Header.textContent).toBe('Create Your Account');
});

test('renders the Component', () => {
  const registrationPage = render(<Register />);
  expect(registrationPage.firstChild).toMatchSnapshot();
});