import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter as Router } from 'react-router-dom';
import { Hero } from '../../components/Hero';
import articleMock from '../../__mocks__/article';

afterEach(cleanup);

test('renders <Hero /> Component', () => {
  const hero = render(
    <Router>
      <Hero articles={articleMock.articles} getArticles = {jest.fn()} />
    </Router>
  );
  expect(hero).toBeTruthy();
});

test('it renders <Hero /> Component without a trending article', () => {
  const hero = render(
    <Router>
      <Hero articles={[]} getArticles = {jest.fn()} />
    </Router>
  );
  expect(hero).toBeTruthy();
});
