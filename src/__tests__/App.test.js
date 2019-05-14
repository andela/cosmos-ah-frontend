import React from 'react';
import { cleanup } from 'react-testing-library';
import App from '../pages/App';
import { renderWithRedux } from '../lib/testUtil';

afterEach(cleanup);

test('<App /> component', () => {
  const app = renderWithRedux(<App />);
  expect(app).toBeTruthy();
});
