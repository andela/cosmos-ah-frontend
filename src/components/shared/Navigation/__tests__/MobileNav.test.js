import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import MobileNav from '../MobileNav';

afterEach(cleanup);

test('Renders <MobileNav />', () => {
  const mobileNav = render(
    <Router>
      <MobileNav />
    </Router>
  );
  expect(mobileNav).toBeTruthy();
});

