import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeadingWithBorder = styled.h3`
  border-bottom: 2px solid #777;
  text-transform: capitalize;
  width: 95%;
  font-family: 'Circular-Bold';
  font-size: 1.7em;
`;

const ArticleCardHeading = ({ text }) => (
    <StyledHeadingWithBorder>{text}</StyledHeadingWithBorder>
);

ArticleCardHeading.propTypes = {
  text: PropTypes.string.isRequired
};

export default ArticleCardHeading;
