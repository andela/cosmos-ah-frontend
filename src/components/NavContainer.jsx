import React from 'react';
import PrimaryNav from './PrimaryNav';
import SecondaryNav from './SecondaryNav';

const pages = [
  { title: 'Home', url: '/' },
  { title: 'Culture', url: '/culture' },
  { title: 'Tech', url: '/tech' },
  { title: 'Fiction', url: '/fiction' },
  { title: 'Politics', url: '/politics' },
  { title: 'Health', url: '/health' },
  { title: 'Self', url: '/self' },
  { title: 'Romance', url: '/romance' }
];

const NavContainer = () => (
  <nav>
    <SecondaryNav />
    <PrimaryNav brandLogo="Logo" pages={pages} />
  </nav>
);

export default NavContainer;
