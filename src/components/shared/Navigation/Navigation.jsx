import React from 'react';
import styled from 'styled-components';

import Logo from './Logo/Logo';
import NavigationLinks from './NavigationMenu/NavigationMenu';

const Nav = styled.nav`
  width: 100%;
  height: 96px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(138, 137, 137, 0.1);
  display: flex;
`;

const Container = styled.div`
  margin: 25px auto;
`;

const Navigation = props => (
  <Nav>
    <Container className="ui container secondary menu">
      <Logo />
      <NavigationLinks />
    </Container>
  </Nav>
);

export default Navigation;
