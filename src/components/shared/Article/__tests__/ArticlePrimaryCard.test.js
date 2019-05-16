import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ArticlePrimaryCard from '../ArticlePrimaryCard';
import articleMock from '../../../../__mocks__/article';

const bookMarkIcon = <img src="/path/to/bookmark-icon.png" />

afterEach(cleanup);

const { article } = articleMock;

const props = {article, bookMarkIcon };

test('renders <ArticlePrimaryCard /> component', () => {
  const card = render(<ArticlePrimaryCard {...props} />);
  expect(card).toBeTruthy();
});

test('card has a title', () => {
  const { getByText } = render(<ArticlePrimaryCard {...props} />);
  expect(getByText('my article').tagName).toBe('H3');
});

test('card has a description', () => {
  const { getByText } = render(<ArticlePrimaryCard {...props} />);
  expect(getByText('lorem desc').tagName).toBe('P');
});

test('card has an icon', () => {
  const { getByTestId } = render(<ArticlePrimaryCard {...props} />);
  expect(getByTestId(`card-icon-${article.id}`).tagName).toBe('I');
});

test('card displays reading time', () => {
  const { getByTestId } = render(<ArticlePrimaryCard {...props} />);
  expect(getByTestId(`article-read-time-${article.id}`).tagName).toBe('SPAN');
});
