import React from 'react';
import { render, cleanup } from 'react-testing-library';
import SearchIcon from '../SearchIcon';

afterEach(cleanup);

const props = {
  width: '50px',
  height: '50px',
  icon: "/images/src/icon.jpg",
  position: {
    top: 0, left: 0
  }
}

test('Renders <SearchIcon />', () => {
  const searchIcon = render(<SearchIcon {...props} />);
  expect(searchIcon).toBeTruthy();
});

test('Renders <SearchIcon /> with missing props', () => {
  const props = {
    height: 50,
    icon: "/images/src/icon.jpg",
    position: {
      top: 0, left: 0
    }
  };
  const searchIcon = render(<SearchIcon {...props} />);
  expect(searchIcon).toBeTruthy();
});

test('Renders <SearchIcon /> with missing props', () => {
  const props = {
    width: 50,
    icon: "/images/src/icon.jpg",
    position: {
      top: 0, left: 0
    }
  };
  const searchIcon = render(<SearchIcon {...props} />);
  expect(searchIcon).toBeTruthy();
});
