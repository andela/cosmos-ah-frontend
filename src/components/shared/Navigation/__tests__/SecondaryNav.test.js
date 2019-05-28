import React from 'react';
import { render, cleanup } from 'react-testing-library';
import SecondaryNav from '../SecondaryNav';
import { MemoryRouter as Router } from 'react-router-dom';

afterEach(cleanup);

const props = { brandLogo: 'AppLogo', authNavBarIsVisible: false };

test('Renders <SecondaryNav /> component', () => {
  const secondaryNav = render(
    <Router>
      <SecondaryNav {...props} />
    </Router>);
  expect(secondaryNav).toBeTruthy();
});

test('Adds a logo to the nav bar', () => {
  const secondaryNav = render(
    <Router>
      <SecondaryNav {...props} />
    </Router>
  );
  expect(secondaryNav.getByText('AppLogo').tagName).toBe('DIV');
});

test('Adds a login and sign up button to the nav bar', () => {
  const secondaryNav = render(
    <Router>
      <SecondaryNav {...props} />
    </Router>
  );
  expect(secondaryNav.getByText('sign in').tagName).toBe('A');
  expect(secondaryNav.getByText('Get started').tagName).toBe('A');
});

test('Adds a search bar to the nav bar', () => {
  const { getByPlaceholderText } = render(
    <Router>
      <SecondaryNav {...props} />
    </Router>
  );
  expect(getByPlaceholderText('Find the stories you love').tagName).toBe('INPUT');
});

test('Makes nav bar fixed if authNavBarIsVisible is true', () => {
  const secondaryNav = render(
    <Router>
      <SecondaryNav
        {...props}
        authNavBarIsVisible={true} />
    </Router>
  );
  expect(secondaryNav).toBeTruthy();
});
