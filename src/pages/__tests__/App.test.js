import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { cleanup, render } from 'react-testing-library';
import { mockStoreData } from '../../__mocks__/store';
import App from '../App';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

afterEach(cleanup);

test('renders <App /> component', () => {
  const app = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(app).toBeTruthy();
});
