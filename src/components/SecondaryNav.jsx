import React from 'react';
import styled from 'styled-components';
import { Form, Input, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  background-color: #276BA9;
  padding: 10px 30px;
  border: none;
  outline: none;
  border-radius: 4px;
  color: #FFFFFF;
  width: 80%;
`;

const NavItemContainer = styled('div')`
  display: inline-block;
`;

const SearchFieldContainer = styled(NavItemContainer)`
  margin-right: 10px;
`;

const NavContainer = styled.div`
  padding: 20px;
`;

const SearchBarFormFieldContainer = styled.div`
  position: absolute;
  width: 100%;
`;

const SearchBarActionSection = styled.section`
  flex: 1 0 70%;
  display: flex;
  justify-content: space-between;
`;

const SearchBarLogo = styled.div`
  flex: 1 0 30%;
`;

const SearchBarHeader = styled.div`
  display: flex;
`;

const SearchBarActionForm = styled.form`
  flex: 1 0 70%;
  position: relative;
`;

const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  text-transform: capitalize;
  padding: 10px;
  cursor: pointer;
  color: #FFFFFF;
`;

const LoginButton = styled(Button)`
  background: none;
  :hover {
    color: #E4E4E4;
  }
`;

const SignUpButton = styled(Button)`
  background: #276BA9;
  :hover {
    color: #E4E4E4;
  }
`;

const SearchIconImage = styled.img`
   position: absolute;
   top: 10px;
   left: 10px;
   width: 15px;
   height: 15px,
`;

const SecondaryNav = ({ brandLogo }) => (
  <NavContainer>
    <SearchBarHeader>
    <SearchBarLogo>
      <div>Hello world</div>
    </SearchBarLogo>

    <SearchBarActionSection>
      <SearchBarActionForm>
        <SearchBarFormFieldContainer>
          <SearchIconImage src="../assets/images/svgs/search-1.svg" alt="A white magnifying glass" />
          <StyledInput
            placeholder="Find the stories you love"
          />
        </SearchBarFormFieldContainer>
      </SearchBarActionForm>
      <div>
        <LoginButton>login</LoginButton>
        <SignUpButton>Get started</SignUpButton>
      </div>
    </SearchBarActionSection>
  </SearchBarHeader>
  </NavContainer>
);

SecondaryNav.propTypes = {
  brandLogo: PropTypes.node
};

export default SecondaryNav;
