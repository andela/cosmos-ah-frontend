import React from 'react';
import styled from 'styled-components';

const Button = ({
  classList,
  onHover,
  buttonStyle,
  onClick,
  children
}) => (
   <Button.Container
	hover={onHover}
	buttonStyle={buttonStyle}
	onClick={onClick}
	classname={classList}>
	{children}</Button.Container>
);

Button.Container = styled.button`
  font-size: 16px;
  background: ${props => props.buttonStyle.background};
  box-sizing: border-box;
  border-radius: 5px;
  font-family: 'Circular-Book';
  padding: 5px 15px;
  border: ${props => props.buttonStyle.border};
  color: ${props => props.buttonStyle.color};
  &:hover {
    background: ${props => props.hover.background};
		color: ${props => props.hover.color};
		cursor: pointer;
  }
`;

export default Button;
