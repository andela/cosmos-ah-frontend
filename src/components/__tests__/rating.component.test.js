import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Ratings from '../ProfileComponent/Activity/Ratings';

afterEach(cleanup);

describe('Should render the component', () => {
  test('<Ratings /> component', () => {
    const ratings = render(<Ratings />);
    expect(ratings).toBeTruthy();
    expect(ratings).toMatchSnapshot();
  });
});