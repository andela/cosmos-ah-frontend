import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ShowCase from '../components/ShowCase.jsx';

afterEach(cleanup);

const article = {
  id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
  title: 'my article',
  imageUrl: '',
  author: { fullName: 'Albert Einstein' },
  totalReadTime: 3,
  tags: [],
  body: 'lorem ipsum'
};

test('it adds a welcome message', async () => {
  const { getByText } = render(<ShowCase article={article} />);
  expect(getByText(/Welcome/).tagName).toBe('H3');
});

test('it displays the app\'s name', async () => {
  const { getByText } = render(<ShowCase article={article} />);
  expect(getByText(/Author's Haven/).tagName).toBe('SPAN');
});

test('it displays the article title', async () => {
  const { getByText, getByTestId } = render(<ShowCase article={article} />);
  expect(getByTestId('my-article').tagName).toBe('H3');
  expect(getByText('my article').tagName).toBe('H3');
});

test('it displays the article author\'s name', async () => {
  const { getByText, getByTestId } = render(<ShowCase article={article} />);
  expect(getByTestId('my-article').tagName).toBe('H3');
  expect(getByText(/Albert Einstein/).tagName).toBe('P');
});
