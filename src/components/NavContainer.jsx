import React from 'react';
import PrimaryNav from './shared/Navigation/PrimaryNav';
import SecondaryNav from './shared/Navigation/SecondaryNav';
import AppLogo from './AppLogo';
import logo from '../assets/images/inverted-logo.png';

const links = [
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
    <PrimaryNav brandLogo={<AppLogo logo={logo} />} links={links} />
  </nav>
);

export default NavContainer;
