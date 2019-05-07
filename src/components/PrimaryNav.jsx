import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

const NavList = styled.ul`
  text-transform: uppercase;
  font-size: 0.8em;
`;

const StyledLink = styled(Link)`
  color: #fff;
`;

const PrimaryNav = ({ brandLogo, pages }) => (
  <Fragment>
    <Grid columns="two" container relaxed stackable>
      <Grid.Column>
        <h3>{brandLogo}</h3>
      </Grid.Column>
      <Grid.Column>
        <nav>
          <NavList>
            <Router>
              {pages.map((page, i) => (
                <li key={i}>
                  <StyledLink to={page.url}>{page.title}</StyledLink>
                </li>
              ))}
            </Router>
          </NavList>
        </nav>
      </Grid.Column>
    </Grid>
  </Fragment>
);

PrimaryNav.propTypes = {
  brandLogo: PropTypes.node.isRequired,
  pages: PropTypes.arrayOf(PropTypes.object)
};

export default PrimaryNav;
