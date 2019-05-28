import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Button = ({
  classList,
  onHover,
  isStyled,
  onClicked,
  children,
  isDisabled
}) => (
   <Button.Container
	hover={onHover}
	stylesList={isStyled || null}
	onClick={onClicked}
  disabled={isDisabled}
	className={classList}
  data-testid='app-ui-button'>
	{children}</Button.Container>
);

Button.Container = styled.button`
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: 'Circular-Book';
  padding: 5px 15px;
  ${props => props.stylesList};
  &:hover {
    ${props => props.hover};
		cursor: pointer;
  }
`;

export default withRouter(Button);
