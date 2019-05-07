import React from 'react';
import styled from 'styled-components';

export const PrimaryTitle = ({ classList, style, children, }) => (
  <PrimaryTitle.Text className={classList} style={style}>{children}</PrimaryTitle.Text>
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

PrimaryTitle.Text = styled.h2`
  ${props => props.style}
`;
