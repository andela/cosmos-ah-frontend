import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PrimaryNav from './shared/Navigation/PrimaryNav';
import SecondaryNav from './shared/Navigation/SecondaryNav';
import AppLogo from './AppLogo';
import logo from '../assets/images/inverted-logo.png';
import appUtils from '../utils';

const HomeNavigationBar = styled.nav`
  height: 200px;
`;

const toggleNavBarsOnScroll = setAuthNavBarVisibility => {
  const verticalScrollDistance = window.scrollY;
  if (verticalScrollDistance > 0) {
    setAuthNavBarVisibility(false);
  } else if (verticalScrollDistance === 0) {
    setAuthNavBarVisibility(true);
  }
};

const NavContainer = () => {
  const [authNavBarIsVisible, setAuthNavBarVisibility] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      toggleNavBarsOnScroll(setAuthNavBarVisibility);
    });
    return window.removeEventListener('scroll', toggleNavBarsOnScroll);
  }, [authNavBarIsVisible]);

  return (
    <HomeNavigationBar>
      <SecondaryNav brandLogo={<AppLogo logo={logo} />} authNavBarIsVisible={authNavBarIsVisible} />
      <PrimaryNav
        links={appUtils.navLinks}
        authNavBarIsVisible={authNavBarIsVisible}
      />
    </HomeNavigationBar>
  );
};

export default NavContainer;
