import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Like from '../ProfileComponent/Activity/Likes';

afterEach(cleanup);

describe('Should render the component', () => {
  test('<Like /> component', () => {
    const like = render(<Like />);
    expect(like).toBeTruthy();
    expect(like).toMatchSnapshot();
  });
});