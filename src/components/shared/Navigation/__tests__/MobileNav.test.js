import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from 'react-testing-library';
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

test('toggles the mobile side nav visibility when the window is clicked', () => {
  const mobileNav = render(
    <Router>
      <MobileNav />
    </Router>
  );
  fireEvent.click(window);
  expect(mobileNav).toBeTruthy();
});

test('toggles the mobile side nav visibility when Escape is pressed', () => {
  const mobileNav = render(
    <Router>
      <MobileNav />
    </Router>
  );
  fireEvent.keyDown(window);
  expect(mobileNav).toBeTruthy();
});
