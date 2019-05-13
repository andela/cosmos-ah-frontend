import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Activity from '../ProfileComponent/Activity';

afterEach(cleanup);

describe('Should render the component', () => {
  test('<Activity /> component', () => {
    const activity = render(<Activity />);
    expect(activity).toBeTruthy();
    expect(activity).toMatchSnapshot();
  });
});