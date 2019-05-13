import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Button = ({
  classList,
  onHover,
  buttonStyle,
  onClicked,
  children,
  isDisabled,
}) => (
   <Button.Container
	hover={onHover}
	buttonStyle={buttonStyle || null}
	onClick={onClicked}
  disabled={isDisabled}
	className={classList}>
	{children}</Button.Container>
);

Button.Container = styled.button`
  font-size: 16px;
  ${props => props.buttonStyle};
  box-sizing: border-box;
  border-radius: 5px;
  font-family: 'Circular-Book';
  padding: 5px 15px;
  &:hover {
    ${props => props.hover};
		cursor: pointer;
  }
`;

export default withRouter(Button);
