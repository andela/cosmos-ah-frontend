import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter as Router } from 'react-router-dom';
import PrimaryNav from '../PrimaryNav';
import navigationMock from '../__mocks__/navigation';

afterEach(cleanup);

const props = { brandLogo: 'AppLogo', links: navigationMock.links, authNavBarIsVisible: true };

test('Renders <PrimaryNav /> component', () => {
  const primaryNav = render(
    <Router>
      <PrimaryNav {...props} />
    </Router>
  );
  expect(primaryNav).toBeTruthy();
});

test('Adds nav links to the nav bar', () => {
  const { getByText } = render(
    <Router>
      <PrimaryNav {...props} />
    </Router>
  );
  expect(getByText('Home').tagName).toBe('A');
  expect(getByText('Articles').tagName).toBe('A');
});

test('Adjusts primary nav positioning when secondary nav bar is invisible', () => {
  const primaryNav = render(
    <Router>
      <PrimaryNav {...props} authNavBarIsVisible={false} />
    </Router>
  );
  expect(primaryNav).toBeTruthy();
});
