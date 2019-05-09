import React from 'react';
import { render, cleanup } from 'react-testing-library';
import SecondaryNav from '../components/SecondaryNav.jsx';

afterEach(cleanup);

test('Renders <SecondaryNav /> component', () => {
  const secondaryNav = render(<SecondaryNav />);
  expect(secondaryNav).toBeTruthy();
});

test('Adds a logo to the nav bar', () => {
  const secondaryNav = render(<SecondaryNav brandLogo={<h3>{'AppLogo'}</h3>}/>);
  expect(secondaryNav.getByText('AppLogo').tagName).toBe('H3');
});

test('Adds a sign in / sign up button to the nav bar', () => {
  const secondaryNav = render(<SecondaryNav brandLogo={<h3>{'AppLogo'}</h3>}/>);
  expect(secondaryNav.getByText('Sign in').tagName).toBe('BUTTON');
  expect(secondaryNav.getByText('Get started').tagName).toBe('BUTTON');
});

test('Adds a search bar to the nav bar', () => {
  const { getByPlaceholderText } = render(<SecondaryNav brandLogo={<h3>{'AppLogo'}</h3>}/>);
  expect(getByPlaceholderText('Find the stories you love').tagName).toBe('INPUT');
});
