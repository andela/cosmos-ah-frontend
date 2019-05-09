import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import Register from '../Register';

afterEach(cleanup);

test('<Register /> component', () => {
  const registrationPage = render(<BrowserRouter><Register /></BrowserRouter>);
  expect(registrationPage).toBeTruthy();
  expect(registrationPage.getByText('Sign Up').tagName).toBe('BUTTON');
  expect(registrationPage.getByText('Sign In').tagName).toBe('BUTTON');
});

test('renders the Form', () => {
  const { getByPlaceholderText } = render(<BrowserRouter><Register /></BrowserRouter>);
  expect(getByPlaceholderText('Full Name')).toBeTruthy();
  expect(getByPlaceholderText('Username')).toBeTruthy();
  expect(getByPlaceholderText('Email Address')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();
  expect(getByPlaceholderText('Confirm Password')).toBeTruthy();
});

test('renders the Header', () => {
  const registrationPage = render(<BrowserRouter><Register /></BrowserRouter>);
  const Header = registrationPage.getByText('Create Your Account');
  expect(Header.textContent).toBe('Create Your Account');
});

test('renders the Component', () => {
  const registrationPage = render(<BrowserRouter><Register /></BrowserRouter>);
  expect(registrationPage.getAllByPlaceholderText('Full Name')).toMatchSnapshot();
  expect(registrationPage.getByText('Sign Up').tagName).toMatchSnapshot();
});
