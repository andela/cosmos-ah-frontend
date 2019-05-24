import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import reduxStore from 'redux-mock-store';
import Option from '../shared/Option';
import { mockStoreData } from '../../__mocks__/store';

let mockStore = reduxStore();
let store = mockStore(mockStoreData);

afterEach(cleanup);

describe('Should render the component', () => {
  test('<Option /> component', () => {
    const option = render(<Provider store={store}><Router><Option /></Router></Provider>)
    expect(option).toBeTruthy();
  });
});