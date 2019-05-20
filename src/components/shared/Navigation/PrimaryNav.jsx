import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
  text-transform: uppercase;
  font-size: 0.8em;
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const NavListItem = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 0px 15px;
  font-size: 1.25em;
  :hover {
    color: red !important;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  :hover {
    color: #E4E4E4;
  }
`;

const Banner = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-top: -50px;
  @media(max-width: 768px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  flex: 1 0 30%;
  font-size: 2em;
`;

const NavBox = styled.nav`
  flex: 1 0 70%;
`;

const PrimaryNav = ({ brandLogo, links }) => (
    <Banner>
      <LogoContainer>
        {brandLogo}
      </LogoContainer>
      <NavBox>
        <NavList>
          {links.map((page, i) => (
            <NavListItem key={i}>
              <StyledLink to={page.url}>{page.title}</StyledLink>
            </NavListItem>
          ))}
        </NavList>
      </NavBox>
    </Banner>
);

PrimaryNav.propTypes = {
  brandLogo: PropTypes.node.isRequired,
  links: PropTypes.arrayOf(PropTypes.object)
};

export default PrimaryNav;
