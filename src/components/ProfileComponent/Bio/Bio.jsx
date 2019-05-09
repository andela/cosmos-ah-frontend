import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../shared/Text/Text';

const Wrapper = styled.div`
  padding: 0.78571429em 0.92857143em;
`;
const Bio = ({ text, style }) => (
  <Wrapper className="ui text">
    <Paragraph paragraphStyle={style}>{text}</Paragraph>
  </Wrapper>
);

export default Bio;
