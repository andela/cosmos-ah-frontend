import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import PrimaryNav from './shared/Navigation/PrimaryNav';
import SecondaryNav from './shared/Navigation/SecondaryNav';
import AppLogo from './AppLogo';
import logo from '../assets/images/inverted-logo.png';
import appUtils from '../utils';

const NavContainer = () => (
    <nav>
      <Container>
        <SecondaryNav brandLogo={<AppLogo logo={logo} />} />
        <PrimaryNav brandLogo={<AppLogo logo={logo} />} links={appUtils.navLinks} />
      </Container>
    </nav>
);

export default NavContainer;
