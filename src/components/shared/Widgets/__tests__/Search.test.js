import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Search from '../Search';

afterEach(cleanup);

const props = {
  icon: 'path/to/image.svg',
  iconDescription: 'magnifying glass',
  placeholder: 'Search',
  inputBackgroundColor: 'grey',
  inputTextColor: 'white',
  inputWidth: '300px',
  position: {
    top: 0, left: 0
  },
  inputBorder: 'none'
};

test('Renders <Search />', () => {
  const search = render(<Search {...props} />);
  expect(search).toBeTruthy();
});
