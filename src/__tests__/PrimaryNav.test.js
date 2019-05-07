import React from 'react';
import { render, cleanup } from 'react-testing-library';
import PrimaryNav from '../components/PrimaryNav.jsx';

afterEach(cleanup);

const pages = [
  { title: 'Home', url: '/' },
  { title: 'Articles', url: '/articles' }
];

const props = { brandLogo: 'AppLogo', pages };

test('Renders <PrimaryNav /> component', () => {
  const primaryNav = render(<PrimaryNav {...props}/>);
  expect(primaryNav).toBeTruthy();
});

test('Adds nav links to the nav bar', () => {
  const { getByText } = render(<PrimaryNav {...props } />);
  expect(getByText('Home').tagName).toBe('A');
  expect(getByText('Articles').tagName).toBe('A');
});
