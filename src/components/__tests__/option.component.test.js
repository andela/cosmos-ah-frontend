import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';
import Option from '../shared/Option';

afterEach(cleanup);

describe('Should render the component', () => {
  test('<Option /> component', () => {
    const option = render(<Option />);
    const { debug, getByText } = option;
    expect(option).toBeTruthy();
    // expect(option.container.firstChild).toMatchSnapshot()
  });
});