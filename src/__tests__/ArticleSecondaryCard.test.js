import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ArticleSecondaryCard from '../components/shared/Article/ArticleSecondaryCard';
import articleMock from '../__mocks__/article';

afterEach(cleanup);

const { article } = articleMock;

test('renders <ArticleSecondaryCard /> component', () => {
  const card = render(<ArticleSecondaryCard article={article} />);
  expect(card).toBeTruthy();
});

test.skip('renders <ArticleSecondaryCard /> component', () => {
  const card = render(<ArticleSecondaryCard article={article} />);
  expect(card).toBeTruthy();
});
