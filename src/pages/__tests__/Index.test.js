import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { cleanup, render } from 'react-testing-library';
import Index from '../Index';
import configureMockStore from 'redux-mock-store';
import { mockStoreData } from '../../__mocks__/store';

const mockStore = configureMockStore([thunk]);

const store = mockStore(mockStoreData);

afterEach(cleanup);

test('renders <Index /> component', () => {
  const homePage = render(
    <Provider store={store}>
      <Router>
        <Index />
      </Router>
    </Provider>
  );
  expect(homePage).toBeTruthy();
});
