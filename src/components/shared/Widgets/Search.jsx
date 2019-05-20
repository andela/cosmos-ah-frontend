import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import SearchIcon from './SearchIcon';

const SearchBarFormFieldContainer = styled.div`
  position: absolute;
  width: 100%;
  @media(max-width: 768px) {
    display: none;
  }
`;

const Search = ({
  icon,
  iconDescription,
  placeholder,
  inputBackgroundColor,
  inputTextColor,
  inputWidth,
  position,
  inputBorder
}) => (
    <Fragment>
      <SearchBarFormFieldContainer>
        <SearchIcon
          src={icon}
          alt={iconDescription}
          position={position}
        />
        <SearchInput
          placeholder={placeholder}
          backgroundColor={inputBackgroundColor}
          color={inputTextColor}
          width={inputWidth}
          border={inputBorder}
        />
      </SearchBarFormFieldContainer>
    </Fragment>
);

Search.propTypes = {
  icon: PropTypes.string,
  iconDescription: PropTypes.string,
  placeholder: PropTypes.string,
  inputBackgroundColor: PropTypes.string,
  inputTextColor: PropTypes.string,
  inputWidth: PropTypes.string,
  position: PropTypes.shape({
    left: PropTypes.string,
    top: PropTypes.string
  }),
  inputBorder: PropTypes
};

export default Search;
