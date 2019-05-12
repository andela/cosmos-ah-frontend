import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ArticlePrimaryCard from '../components/shared/Article/ArticlePrimaryCard';
import articleMock from '../__mocks__/article';

afterEach(cleanup);

const { article } = articleMock;

test('renders <ArticlePrimaryCard /> component', () => {
  const card = render(<ArticlePrimaryCard article={article} />);
  expect(card).toBeTruthy();
});

test('card has a title', () => {
  const { getByText } = render(<ArticlePrimaryCard article={article} />);
  expect(getByText('my article').tagName).toBe('H3');
});

test('card has a description', () => {
  const { getByText } = render(<ArticlePrimaryCard article={article} />);
  expect(getByText('lorem desc').tagName).toBe('P');
});

test('card has an icon', () => {
  const { getByTestId } = render(<ArticlePrimaryCard article={article} />);
  expect(getByTestId(`card-icon-${article.id}`).tagName).toBe('I');
});

test('card displays reading time', () => {
  const { getByTestId } = render(<ArticlePrimaryCard article={article} />);
  expect(getByTestId(`article-read-time-${article.id}`).tagName).toBe('SPAN');
});
