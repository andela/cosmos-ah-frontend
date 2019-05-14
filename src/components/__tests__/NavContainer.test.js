import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter as Router } from 'react-router-dom';
import NavContainer from '../../components/NavContainer';

afterEach(cleanup);

test('it renders', () => {
  const navContainer = render(
    <Router>
      <NavContainer />
    </Router>
  );
  expect(navContainer).toBeTruthy();
});
