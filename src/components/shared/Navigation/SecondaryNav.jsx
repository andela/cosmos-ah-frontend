import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import searchIcon from '../../../assets/images/svgs/search.svg';
import MobileNav from './MobileNav';

const StyledInput = styled.input`
  background-color: #276BA9;
  padding: 10px 30px;
  border: none;
  outline: none;
  border-radius: 4px;
  color: #FFFFFF;
  width: 80%;
  :input-placeholder {
    color: #FFFFFF;
  }
  ::-webkit-input-placeholder {
    color: #e4e4e4;
  }
`;

const SearchBarFormFieldContainer = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 40px;
  @media(max-width: 768px) {
    display: none;
  }
`;

const SearchBarLogo = styled.div`
  flex: 1 0 50%;
  padding: 0;
  margin: 0;
  margin-top: -10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SearchBarActionForm = styled.form`
  flex: 1 0 30%;
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

const StyledLink = styled(Link)`
  color: #FFF;
  :hover {
    color: #E4E4E4;
  }
`;

const NavButtonContainer = styled.div`
  flex: 1 1 20%;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileSearchIcon = styled.div`
  display: none;
`;

const SecondaryNavBlock = styled.div`
  position: ${props => (props.authNavBarIsVisible ? 'fixed' : 'static')};
  width: 100%;
  top: 0;
  left: 0;
  background-color: #3A8FDD;
  z-index: 9999;
  display: ${props => (props.authNavBarIsVisible ? 'block' : 'none')}
`;

const Nav = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
`;

const SecondaryNav = ({ brandLogo, authNavBarIsVisible }) => (
  <Fragment>
    <MobileNav />
      <SecondaryNavBlock
        authNavBarIsVisible={authNavBarIsVisible}
        data-testid="secondary-nav-bar">
          <Nav>
            <SearchBarLogo>{brandLogo}</SearchBarLogo>
            <SearchBarActionForm>
              <MobileSearchIcon>
                <SearchIconImage src={searchIcon} alt="A magnifying glass lens" />
              </MobileSearchIcon>
              <SearchBarFormFieldContainer>
                <SearchIconImage src={searchIcon} alt="A magnifying glass lens" />
                <StyledInput
                  placeholder="Find the stories you love"
                />
              </SearchBarFormFieldContainer>
            </SearchBarActionForm>
            <NavButtonContainer>
              <LoginButton>
                <StyledLink to="/login" role="button">sign in</StyledLink>
              </LoginButton>
              <SignUpButton>
                <StyledLink to="/signup" role="button">Get started</StyledLink>
              </SignUpButton>
            </NavButtonContainer>
          </Nav>
      </SecondaryNavBlock>
  </Fragment>
);

SecondaryNav.propTypes = {
  brandLogo: PropTypes.node,
  authNavBarIsVisible: PropTypes.bool.isRequired
};

export default SecondaryNav;
