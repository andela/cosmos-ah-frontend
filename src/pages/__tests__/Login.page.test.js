// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { render, cleanup } from 'react-testing-library';
// import Login from '../Login';

// afterEach(cleanup);

// test('Renders <Login />', () => {
//   const LoginComponent = render(<BrowserRouter><Login /></BrowserRouter>);
//   expect(LoginComponent).toBeTruthy();
//   expect(LoginComponent).toMatchSnapshot();
// });

// test('Renders <Login /> form', () => {
//   const { getByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>);
//   expect(getByPlaceholderText('Email Address')).toBeTruthy();
//   expect(getByPlaceholderText('Password')).toBeTruthy();
// });


// test('render <Login />  Login Header', () => {
//   const LoginHeader = render(<BrowserRouter><Login /></BrowserRouter>);
//   const HeaderText = LoginHeader.getByText('Login');
//   expect(HeaderText.textContent).toBe('Login');
// });
