import React from 'react';
import { render, cleanup } from 'react-testing-library';
import SearchInput from '../SearchInput';

afterEach(cleanup);

const props = {
  onChange: jest.fn(),
  placeholder: 'Search for articles',
  borderThickness: 1,
  borderColor: '#ccc',
  textInputColor: 'black',
};

test('Renders <SearchInput />', () => {
  const searchInput = render(<SearchInput {...props} />);
  expect(searchInput).toBeTruthy();
});
