import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Button = ({
  classList,
  onHover,
  isStyled,
  onClicked,
  children,
  isDisabled,
  dataTestId // added to ease testing of this component
}) => (
   <Button.Container
	hover={onHover}
	stylesList={isStyled || null}
	onClick={onClicked}
  disabled={isDisabled}
	className={classList}
  data-testid={dataTestId}>
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
