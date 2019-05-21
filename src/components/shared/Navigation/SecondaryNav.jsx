import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import searchIcon from '../../../assets/images/svgs/search.svg';
import MobileNav from './MobileNav';
import AppUtils from '../../../utils';
import DropdownSelect from '../Widgets/Dropdown';

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

const NavItemContainer = styled('div')`
  display: inline-block;
`;

const NavContainer = styled.div`
  padding: 20px;
`;

const SearchBarFormFieldContainer = styled.div`
  position: absolute;
  width: 100%;
  @media(max-width: 768px) {
    display: none;
  }
`;

const SearchBarActionSection = styled.section`
  flex: 1 1 70%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 768px) {
    flex: 1 1 10%;
  }
`;

const SearchBarLogoContainer = styled.div`
  flex: 1 0 20%;
  @media(max-width: 768px) {
    width: 80%;
  }
`;

const SearchBarLogo = styled.div`
  display: none;
  padding: 0;
  @media(max-width: 768px) {
    display: block;
  }
`;

const SearchBarHeader = styled.div`
  display: flex;
  @media(max-width: 768px) {
    display: none;
  }
`;

const SearchBarActionForm = styled.form`
  flex: 1 0 60%;
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

const DropdownContainer = styled.div`
  flex: 1 0 7%;
  padding: 0;
  margin-top: 1.15px;
  div {
    background: #276BA9 !important;
    i {
      color: #E4E4E4;
    }
    & > div {
      color: #E4E4E4 !important;
    }
  }
`;

const StyledLink = styled(Link)`
  color: #FFF;
  :hover {
    color: #E4E4E4;
  }
`;

const ButtonContainer = styled.div`
  @media(max-width: 992px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  display: none;
`;

const SecondaryNav = ({ brandLogo }) => (
  <NavContainer>
    <MobileNav />
    <SearchBarHeader>
      <SearchBarLogoContainer>
        <SearchBarLogo>{brandLogo}</SearchBarLogo>
      </SearchBarLogoContainer>
      <SearchBarActionSection>
        <DropdownContainer>
          <DropdownSelect
            placeholder='SEARCH'
            dropDownItems={AppUtils.dropDownItems}
          />
        </DropdownContainer>
        <SearchBarActionForm>
          <SearchIcon>
            <SearchIconImage src={searchIcon} alt="A magnifying glass lens" />
          </SearchIcon>
          <SearchBarFormFieldContainer>
            <SearchIconImage src={searchIcon} alt="A magnifying glass lens" />
            <StyledInput
              placeholder="Find the stories you love"
            />
          </SearchBarFormFieldContainer>
        </SearchBarActionForm>
        <ButtonContainer>
          <LoginButton>
            <StyledLink to="/login" role="button">log in</StyledLink>
          </LoginButton>
          <SignUpButton>
            <StyledLink to="/signup" role="button">Get started</StyledLink>
          </SignUpButton>
        </ButtonContainer>
      </SearchBarActionSection>
    </SearchBarHeader>
  </NavContainer>
);

SecondaryNav.propTypes = {
  brandLogo: PropTypes.node
};

export default SecondaryNav;
