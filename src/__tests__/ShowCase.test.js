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
  tags: []
};

test('loads and displays greeting', async () => {
  const {
    getByText, getByTestId, container, asFragment
  } = render(
    <ShowCase article={article} />
  );
});
