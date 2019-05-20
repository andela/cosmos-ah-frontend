import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ShowCase from '../ShowCase';
import articleMock from '../../__mocks__/article';

const { article } = articleMock;

afterEach(cleanup);

test('it displays a welcome message', async () => {
  const { getByText } = render(<ShowCase article={article} />);
  expect(getByText(/Welcome/).tagName).toBe('H3');
});

test('it displays the app\'s name', async () => {
  const { getByText } = render(<ShowCase article={article} />);
  expect(getByText(/Author's Haven/).tagName).toBe('P');
});

test('it displays the article title', async () => {
  const { getByText, getByTestId } = render(<ShowCase article={article} />);
  expect(getByTestId('my-article').tagName).toBe('H3');
  expect(getByText('my article').tagName).toBe('H3');
});
