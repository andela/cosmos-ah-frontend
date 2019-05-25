import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
  text-transform: uppercase;
  font-size: 0.8em;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavListItem = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 0px 10px;
  font-size: 1.25em;
  :hover {
    
  }
  &:first-child {
    padding-left: 0;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  :hover {
    color: #E4E4E4;
  }
`;

const PrimaryNavBlock = styled.div`
  position: fixed;
  left: 0;
  z-index: 9999;
  margin: 0 auto;
  width: 100%;
  background-color: #3A8FDD;
  top: ${props => (props.authNavBarIsVisible ? '120px' : '0')};
  padding: ${props => (props.authNavBarIsVisible ? '0' : '16px 0')};
  text-align: ${props => (props.authNavBarIsVisible ? 'left' : 'center')};
  box-shadow: ${props => (props.authNavBarIsVisible ? 'none' : '0px 1px 5px #3A8FDD')};
  transition: all .2s ease-in;
  @media screen and (max-width: 768px) {
      display: none;
  }
`;

const Nav = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PrimaryNav = ({ links, authNavBarIsVisible }) => (
  <PrimaryNavBlock
    authNavBarIsVisible={authNavBarIsVisible}
    >
    <Nav>
    <NavList>
      {links.map((link, i) => (
        <NavListItem key={i}>
          <StyledLink to={link.url}>{link.title}</StyledLink>
        </NavListItem>
      ))}
    </NavList>
    </Nav>
  </PrimaryNavBlock>
);

PrimaryNav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })),
  authNavBarIsVisible: PropTypes.bool.isRequired
};

export default PrimaryNav;
