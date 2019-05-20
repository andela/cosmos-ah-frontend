import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: ${props => props.backgroundColor};
  padding: 10px 30px;
  border: none;
  outline: none;
  border-radius: 4px;
  color: ${props => props.color};
  width: ${props => props.width}
`;

const NavigationSearch = ({ backgroundColor, color, width }) => {
  let inputNodeRef = null;
  useEffect(() => {
    inputNodeRef.focus();
  });
  return (
    <div>
      <StyledInput
        placeholder="Search for an article"
        backgroundColor={backgroundColor}
        color={color}
        width={width}
        ref={node => { inputNodeRef = node; }}
      />
      />
  </div>
  );
};

NavigationSearch.defaultProps = {
  backgroundColor: '#276BA9',
  color: '#FFFFFF',
  width: '100%'
};

NavigationSearch.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string
};

export default NavigationSearch;
