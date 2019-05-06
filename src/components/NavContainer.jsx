import React from 'react';
import PrimaryNav from './PrimaryNav.jsx';
import SecondaryNav from './SecondaryNav.jsx';

const pages = ['Home', 'Culture', 'Tech', 'Fiction', 'Politics', 'Health', 'Self', 'Romance'];

const NavContainer = () => (
  <nav>
    <SecondaryNav />
    <PrimaryNav brandLogo="Logo" pages={pages} />
  </nav>
);

export default NavContainer;
