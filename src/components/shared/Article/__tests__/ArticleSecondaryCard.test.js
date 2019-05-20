import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter as Router } from 'react-router-dom';
import ArticleSecondaryCard from '../ArticleSecondaryCard';
import articleMock from '../../../../__mocks__/article';

afterEach(cleanup);

const { article } = articleMock;

test('renders <ArticleSecondaryCard /> component', () => {
  const card = render(
    <Router>
      <ArticleSecondaryCard article={article} />
    </Router>
  );
  expect(card).toBeTruthy();
});

