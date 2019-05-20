import React from 'react';
import { render, cleanup } from 'react-testing-library';
import NavigationSearch from '../NavigationSearch';

afterEach(cleanup);

test('Renders <NavigationSearch /> using default props', () => {
  const navigationSearch = render(
  <NavigationSearch width="90%" />);
  expect(navigationSearch).toBeTruthy();
});

test('Renders <NavigationSearch /> with props', () => {
  const navigationSearch = render(
  <NavigationSearch 
    backgroundColor="grey"
    color="brown"
    width="80%"
  />);
  expect(navigationSearch).toBeTruthy();
});
