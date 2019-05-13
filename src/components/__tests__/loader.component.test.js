import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';
import ContentLoader from '../shared/Loaders/ContentLoader';

afterEach(cleanup);

describe('Should render the component', () => {
  test('<ContentLoader /> component', () => {
    const loader = render(<ContentLoader />);
    expect(loader).toBeTruthy();
    expect(loader).toMatchSnapshot();
  });
});