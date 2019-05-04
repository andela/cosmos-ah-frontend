import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Register from '../pages/Register';

afterEach(cleanup);

test('<Register /> component', () => {
  const registrationPage = render(<Register />);
  expect(registrationPage).toBeTruthy();
});
