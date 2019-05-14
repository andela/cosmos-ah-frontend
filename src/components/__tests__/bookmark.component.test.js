import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Bookmark from '../ProfileComponent/Activity/Bookmarks';

afterEach(cleanup);

describe('Should render the component', () => {
  test('<Bookmark /> component', () => {
    const bookmark = render(<Bookmark />);
    expect(bookmark).toBeTruthy();
    expect(bookmark).toMatchSnapshot();
  });
});