import React from 'react';
import styled from 'styled-components';
import {
  Button, Checkbox, Form, Input, Grid
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
  padding: 10px 0;
`;

const StyledButton = styled(Button)`
  text-transform: capitalize !important;
  border: 0 !important;
  outline: 0 !important;
  background-color: none !important;
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
                <StyledButton primary compact color="#276BA9">Get started</StyledButton>
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