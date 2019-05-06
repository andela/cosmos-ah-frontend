import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Home from '../pages/Index';

afterEach(cleanup);

test('<Home /> component', () => {
  const homePage = render(<Home />);
  expect(homePage).toBeTruthy();
});
