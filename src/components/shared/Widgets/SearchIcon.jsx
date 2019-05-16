import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchIconImage = styled.img`
   position: absolute;
   top: ${props => `${props.position.top}px` || '10px'};
   left: ${props => `${props.position.left}px` || '10px'};
   width: ${props => props.width || '10px'};
   height: ${props => props.height || '10px'};
`;

const SearchIcon = ({
  width, height, icon, position
}) => (
    <Fragment>
      <SearchIconImage src={icon} width={width} height={height} position={position} />
    </Fragment>
);

SearchIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  position: PropTypes.shape({
    left: PropTypes.number,
    top: PropTypes.number
  })
};

export default SearchIcon;
