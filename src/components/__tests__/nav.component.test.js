import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';
import Navigation from '../shared/Navigation/Navigation';

afterEach(cleanup);

describe('Should render the component', () => {
  test('<Navigation /> component', () => {
    const navigation = render(<Router><Navigation /></Router>);
    const { debug, getByText } = navigation;
    expect(navigation).toBeTruthy();
    expect(navigation.container.firstChild).toMatchSnapshot();
  });
});