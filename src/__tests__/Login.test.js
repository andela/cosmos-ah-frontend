import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Login from '../pages/Login';

afterEach(cleanup);

test('<Login /> component', () => {
  const login = render(<Login />);
  expect(login).toBeTruthy();
});
