import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ArticlePrimaryCard from '../components/shared/Article/ArticlePrimaryCard';
import articleMock from '../__mocks__/article'; 

afterEach(cleanup);

const { article } = articleMock;

test('it renders <ArticlePrimaryCard /> component', () => {
  const card = render(<ArticlePrimaryCard article={article} />);
  expect(card).toBeTruthy();
});
