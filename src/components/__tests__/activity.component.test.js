import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Activity from '../ProfileComponent/Activity';

import { mockStoreData } from '../../__mocks__/store';

const mockStore = configureMockStore();
const store = mockStore(mockStoreData);

afterEach(cleanup);

describe('Should render the component', () => {
  test('<Activity /> component', () => {
    const activity = render(<Provider store={store}><Router><Activity /></Router></Provider>);
    expect(activity).toBeTruthy();
    expect(activity).toMatchSnapshot();
  });
});