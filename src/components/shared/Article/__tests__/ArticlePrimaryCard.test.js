import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import ArticlePrimaryCard from '../ArticlePrimaryCard';
import articleMock from '../../../../__mocks__/article';

afterEach(cleanup);

const { article } = articleMock;

test('renders <ArticlePrimaryCard /> component', () => {
  const card = render(
    <Router>
      <ArticlePrimaryCard article={article} />
    </Router>
  );
  expect(card).toBeTruthy();
});

test('card has a title', () => {
  const { getByText } = render(
    <Router>
      <ArticlePrimaryCard article={article} />
    </Router>);
  expect(getByText('my article').tagName).toBe('H3');
});

test('card has a description', () => {
  const { getByText } = render(
    <Router>
      <ArticlePrimaryCard article={article} />
    </Router>
  );
  expect(getByText('lorem desc').tagName).toBe('P');
});

test('card has an icon', () => {
  const { getByTestId } = render(
    <Router>
      <ArticlePrimaryCard article={article} />
    </Router>
  );
  expect(getByTestId(`card-icon-${article.id}`).tagName).toBe('I');
});

test('card displays reading time', () => {
  const { getByTestId } = render(
    <Router>
      <ArticlePrimaryCard article={article} />
    </Router>
  );
  expect(getByTestId(`article-read-time-${article.id}`).tagName).toBe('SPAN');
});

test('card displays reading time', () => {
  article.totalReadTime = 1;
  const { getByTestId } = render(
    <Router>
      <ArticlePrimaryCard article={article} />
    </Router>
  );
  expect(getByTestId(`article-read-time-${article.id}`).tagName).toBe('SPAN');
});
