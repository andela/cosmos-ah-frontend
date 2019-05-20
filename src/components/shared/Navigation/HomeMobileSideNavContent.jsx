import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideNavLink = styled(Link)`
  text-transform: uppercase;
  display: block;
  padding: 16px 0;
  border-bottom: 1px solid #788A89;
  text-align: right;
  color: ${props => props.color};
  :hover {
    color: #C4C4C4:
  };
  background: ${props => (props.role === 'button' ? props.backgroundColor : 'transparent')};
`;

const HomeMobileSideNavContent = () => (
    <Fragment>
      <SideNavLink>My Articles</SideNavLink>
      <SideNavLink role="button" backgroundColor="transparent">Sign In</SideNavLink>
      <SideNavLink
        role="button" backgroundColor="#276BA9"
      color="white">Get Started</SideNavLink>
    </Fragment>
);

HomeMobileSideNavContent.propTypes = {};

export default HomeMobileSideNavContent;
