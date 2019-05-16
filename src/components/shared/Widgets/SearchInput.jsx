import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
   border: none;
   outline: none;
`;

const StyledInput = styled(Input)`
  background-color: ${props => props.backgroundColor || '#276BA9'};
  padding: 10px 30px;
  border-radius: 4px;
  color: ${props => props.textInputColor};
  width: ${props => props.width || '100%'};
  border: ${props => `${props.borderThickness}px solid ${props.borderColor}`}
`;

const SearchInput = ({
  handleInputChange, placeholder, border, width, color, backgroundColor
}) => (
    <Fragment>
      <StyledInput
        onChange={handleInputChange}
        placeholder={placeholder}
        width={width}
        border={border}
        color={color}
        backgroundColor={backgroundColor}
      />
    </Fragment>
);

SearchInput.propTypes = {
  width: PropTypes.string,
  borderThickness: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  textInputColor: PropTypes.string
};

export default SearchInput;
