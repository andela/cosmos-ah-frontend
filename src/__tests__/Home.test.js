import React from 'react';
import { cleanup } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';
import Home from '../pages/Index';
import { renderWithRedux } from '../lib/testUtil';

const mockStore = configureMockStore();
const store = mockStore({});

afterEach(cleanup);


test('<Home /> component', () => {
  const homePage = renderWithRedux(<Home />);
  expect(homePage).toBeTruthy();
});
