import React, { useState } from 'react';
import styled from 'styled-components';
import AppLogo from '../../AppLogo';
import logo from '../../../assets/images/inverted-logo.png';
import searchIcon from '../../../assets/images/svgs/search.svg';
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
   flex: 1 0 10%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
`;

const ImageContainer = styled.div`
  flex: 1 0 4%;
  padding: 2px;
`;

const HamburgerContainer = styled.div`
  flex: 1 0 4%;
  margin-top: -7px;
  background: #276BA9;
  padding: 6px;
  textAlign: center;
  border-radius: 3px;
  cursor: pointer;
`;

const Image = styled.img`
   width: 15px;
   height: 15px;
   cursor: pointer;
`;

const Bar = styled.div`
  width: 20px;
  height: 3px;
  background-color: #FFF;
  margin: 4px auto;
  transition: 0.4s;
  text-align: center;
  cursor: pointer;
`;

const MobileNav = () => {
  const [sideNavOpen, toggleSideNav] = useState(false);
  return (
    <MobileNavHeader>
      <MobileSideNav
        open={sideNavOpen}
        closeSideNav={() => toggleSideNav(false)}
        links={links}
        />
      <LogoContainer>
        <AppLogo logo={logo} />
      </LogoContainer>
      <MenuContainer>
        <ImageContainer>
          <Image src={searchIcon} alt="A magnifying glass" />
        </ImageContainer>
        <HamburgerContainer
          onClick={() => {
            toggleSideNav(!sideNavOpen);
          }}
          >
            <Bar />
            <Bar />
            <Bar />
        </HamburgerContainer>
      </MenuContainer>
    </MobileNavHeader>
  );
};

export default MobileNav;
