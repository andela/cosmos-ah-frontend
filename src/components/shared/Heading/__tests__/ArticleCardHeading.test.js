import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ArticleCardHeading from '../ArticleCardHeading';

afterEach(cleanup);

test('render <ArticleCardHeading />', () => {
  const cardHeading = render(<ArticleCardHeading text="Thanos" />);
  expect(cardHeading).toBeTruthy();
})

test('displays the article card heading text', () => {
  const { getByText } = render(<ArticleCardHeading text="Thanos" />);
  expect(getByText('Thanos').tagName).toBe('H3');
});
