import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter as Router } from 'react-router-dom';
import { Hero } from '../../components/Hero';
import articleMock from '../../__mocks__/article';

afterEach(cleanup);

test('it renders', () => {
  const hero = render(
    <Router>
      <Hero articles={articleMock.articles} getArticles = {() => {}} />
    </Router>
  );
  expect(hero).toBeTruthy();
});
