import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from '../pages/App';

afterEach(cleanup);

test('<App /> component', () => {
  const app = render(<App />);
  expect(app).toBeTruthy();
});
