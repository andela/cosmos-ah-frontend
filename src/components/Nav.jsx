import React, { Fragment } from 'react';
import styled from 'styled-components';
import PrimaryNav from './PrimaryNavBar.jsx';
import SecondaryNav from './SecondaryNavBar.jsx';

const pages = ['Home', 'Culture', 'Tech', 'Fiction', 'Politics', 'Health', 'Self', 'Romance'];

const NavContainer = () => (
  <nav>
    <SecondaryNav />
    <PrimaryNav brandLogo="Logo" pages={pages} />
  </nav>
);


export default NavContainer;
