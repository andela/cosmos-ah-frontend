import React from 'react';
import { render, cleanup } from 'react-testing-library';
import PrimaryNav from '../components/PrimaryNav.jsx';

afterEach(cleanup);

const pages = ['Home', 'Articles'];
const props = { brandLogo: 'AppLogo', pages };

test('Renders <PrimaryNav /> component', () => {
  const primaryNav = render(<PrimaryNav {...props}/>);
  expect(primaryNav).toBeTruthy();
});

test('Adds a logo to the nav bar', () => {
  const { getByText } = render(<PrimaryNav {...props } />);
  expect(getByText('Home').tagName).toBe('A');
});
