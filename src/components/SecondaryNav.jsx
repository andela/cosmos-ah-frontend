import React from 'react';
import styled from 'styled-components';
import {
  Button, Form, Input, Grid
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const StyledInput = styled(Input)`
  background-color: #276BA9;
  width: 300px;
`;

const NavItemContainer = styled('div')`
  display: inline-block;
`;

const SearchFieldContainer = styled(NavItemContainer)`
  margin-right: 10px;
`;

const NavContainer = styled.div`
  padding-top: 10px;
`;

const StyledButton = styled(Button)`
  text-transform: capitalize !important;
  outline: 0 !important;
  background-color: none !important;
  :hover {
    background-color: none !important;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
`;

const SecondaryNav = ({ brandLogo }) => (
  <NavContainer>
    <Grid columns="2" container>
      <Grid.Column>
        <div>{brandLogo}</div>
      </Grid.Column>

      <Grid.Column>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <SearchFieldContainer>
                <Form>
                  <Form.Field>
                    <Input
                      placeholder="Find the stories you love"
                      icon="search"
                      iconPosition="left"
                    />
                  </Form.Field>
                </Form>
              </SearchFieldContainer>
            </Grid.Column>
            <Grid.Column>
              <NavItemContainer>
                <StyledButton compact basic>Sign in</StyledButton>
                <StyledButton primary compact>Get started</StyledButton>
              </NavItemContainer>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
    </Grid>
  </NavContainer>
);

SecondaryNav.propTypes = {
  brandLogo: PropTypes.node
};

export default SecondaryNav;
