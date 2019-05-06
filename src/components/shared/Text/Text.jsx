import React from 'react';
import styled from 'styled-components';

export const PrimaryTitle = ({ classList, style, children, }) => (
    <h2 className={classList} style={style}>{children}</h2>
);

export const SecondaryTitle = ({ classList, style, children, }) => (
  <h4 className={classList} style={style}>{children}</h4>
);

export const Paragraph = ({
  classList, style, children, paragraphStyle,
}) => (
  <Paragraph.Container
    paragraphStyle={paragraphStyle}
    className={classList}
    style={style}>{children}</Paragraph.Container>
);

Paragraph.Container = styled.p`
  ${props => props.paragraphStyle}
`;
