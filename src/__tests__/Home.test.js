import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Home from '../pages/Home';

afterEach(cleanup);

test('<Home /> component', () => {
  const homePage = render(<Home />);
  expect(homePage).toBeTruthy();
});
