import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
/* eslint-disable import/no-extraneous-dependencies */
import { render } from 'react-testing-library';

const mockStore = configureMockStore();
const store = mockStore({ imgUrl: 'imgUrul' });

export const renderWithRedux = ui => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});
