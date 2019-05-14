import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavigationSearch from '../Widgets/NavigationSearch';

const SideNavContainer = styled.div`
  height: 100%;
  width: 90%;
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 150px;
  background-color: #FFF;
`;

const CloseButton = styled.a`
  position: absolute;
  top: 100px;
  right: 40px;
  font-size: 36px;
  margin-left: 50px;
  font-weight: bold;
  color: #6B6A6A;
  cursor: pointer;
  :hover {
    color: #6B6A6A;
  }
`;

const SideNavLink = styled(Link)`
  text-transform: uppercase;
  display: block;
  padding: 16px 0;
  border-bottom: 1px solid #788A89;
  text-align: right;
  color: #6B6A6A;
  &:hover {
    color: #333333;
  }
`;

const SideNavLinkContainer = styled.div`
  width: 100%;
`;

const SideNavSearchContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const SideNav = ({ open, closeSideNav, links }) => (
  <Fragment>
    {
      open
        ? (<SideNavContainer>
          <div id="mySidenav">
            <CloseButton href="#!" onClick={closeSideNav} role="button">&times;</CloseButton>
            <SideNavLinkContainer>
              <SideNavSearchContainer>
                <NavigationSearch
                  backgroundColor="#C4C4C4"
                  color="#333333"
                />
                {links.map((link, i) => (
                    <SideNavLink to={link.url} key={i}>
                      {link.title}
                    </SideNavLink>
                ))}
              </SideNavSearchContainer>
            </SideNavLinkContainer>
          </div>
        </SideNavContainer>)
        : null
    }
  </Fragment>
);

SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  closeSideNav: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SideNav;
