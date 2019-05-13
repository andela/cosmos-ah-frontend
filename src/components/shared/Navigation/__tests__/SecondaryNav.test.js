import React from 'react';
import { render, cleanup } from 'react-testing-library';
import SecondaryNav from '../SecondaryNav';
import { MemoryRouter as Router } from 'react-router-dom';

afterEach(cleanup);

test('Renders <SecondaryNav /> component', () => {
  const secondaryNav = render(<Router><SecondaryNav /></Router>);
  expect(secondaryNav).toBeTruthy();
});

test('Adds a logo to the nav bar', () => {
  const secondaryNav = render(<Router><SecondaryNav brandLogo={<h3>{'AppLogo'}</h3>}/></Router>);
  expect(secondaryNav.getByText('AppLogo').tagName).toBe('H3');
});

test('Adds a login and sign up button to the nav bar', () => {
  const secondaryNav = render(<Router><SecondaryNav brandLogo={<h3>{'AppLogo'}</h3>}/></Router>);
  expect(secondaryNav.getByText('login').tagName).toBe('A');
  expect(secondaryNav.getByText('Get started').tagName).toBe('A');
});

test('Adds a search bar to the nav bar', () => {
  const { getByPlaceholderText } = render(<Router><SecondaryNav brandLogo={<h3>{'AppLogo'}</h3>}/></Router>);
  expect(getByPlaceholderText('Find the stories you love').tagName).toBe('INPUT');
});
