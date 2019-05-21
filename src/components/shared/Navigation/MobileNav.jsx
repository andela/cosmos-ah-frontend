import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import AppLogo from '../../AppLogo';
import logo from '../../../assets/images/inverted-logo.png';
import MobileSideNav from './MobileSideNav';

const links = [
  { title: 'my articles', url: '/articles' },
  { title: 'login', url: '/login' },
  { title: 'get started', url: '/signup' }
];

const MobileNavHeader = styled.header`
  display: none;
  @media(max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  flex: 1 1 80%;
`;

const MenuContainer = styled.div`
   flex: 1 0 5%;
`;

const HamburgerContainer = styled.div`
  flex: 1 0 4%;
  margin-top: -7px;
  border-radius: 3px;
  cursor: pointer;
`;

const Bar = styled.div`
  width: ${props => props.width || '20px'};
  height: 3px;
  background-color: #FFF;
  margin: 4px 0;
  transition: 0.4s;
  cursor: pointer;
`;

const addClickEvent = (event, opts) => {
  const { sideNavIsOpen, mobileSideNav, toggleSideNav } = opts;
  if (sideNavIsOpen && (mobileSideNav && !mobileSideNav.contains(event.target))) {
    toggleSideNav(false);
  }
};

const addKeyDownEvent = (event, sideNavIsOpen, toggleSideNav) => {
  const escapeKeyCode = 27;
  if ((event.key === 'Escape' || event.keyCode === escapeKeyCode) && sideNavIsOpen) {
    toggleSideNav(false);
  }
};

const MobileNav = () => {
  const [sideNavIsOpen, toggleSideNav] = useState(false);
  let mobileNavHeaderRef;
  useEffect(() => {
    window.addEventListener('click', event => {
      addClickEvent(event, { sideNavIsOpen,
        mobileSideNav: mobileNavHeaderRef,
        toggleSideNav
      });
    });

    window.addEventListener('keydown', event => {
      addKeyDownEvent(event, sideNavIsOpen, toggleSideNav);
    });
    return () => {
      window.removeEventListener('click', addClickEvent);
      window.removeEventListener('keydown', addKeyDownEvent);
    };
  }, [sideNavIsOpen, mobileNavHeaderRef]);
  return (
    <MobileNavHeader ref={node => { mobileNavHeaderRef = node; }}>
      <MobileSideNav
        isOpen={sideNavIsOpen}
        closeSideNav={
          useCallback(() => {
            toggleSideNav(false);
          }, [sideNavIsOpen])
        }
        links={links}
        />
      <LogoContainer>
        <AppLogo logo={logo} />
      </LogoContainer>
      <MenuContainer>
        <HamburgerContainer
          onClick={
            useCallback(() => {
              toggleSideNav(!sideNavIsOpen);
            }, [sideNavIsOpen])
            }
          >
            <Bar />
            <Bar />
            <Bar width="14px" />
        </HamburgerContainer>
      </MenuContainer>
    </MobileNavHeader>
  );
};

export default MobileNav;
