import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import MobileSideNav from '../MobileSideNav';
import navigationMock from '../__mocks__/navigation';

const { links } = navigationMock;

afterEach(cleanup);

test('Renders <MobileSideNav /> and displays it', () => {
  const mobileSideNav = render(
    <Router>
      <MobileSideNav isOpen closeSideNav={jest.fn} links={links}
      />
    </Router>);
  expect(mobileSideNav).toBeTruthy();
});

test('Renders <MobileSideNav /> and does not display it', () => {
  const mobileSideNav = render(
    <Router>
      <MobileSideNav isOpen={false} closeSideNav={jest.fn} links={links}
      />
    </Router>);
  expect(mobileSideNav).toBeTruthy();
});
