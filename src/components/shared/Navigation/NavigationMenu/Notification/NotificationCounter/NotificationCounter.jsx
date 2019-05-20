import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

const NotificationCounter = props => {
  const Counter = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20%;
  top: 40%;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #dd3a3a;
  font-family: 'Circular-Book';
  font-size: 12px;
  color: #ffffff;
  z-index: 999;
  text-align: center;
  padding: 1px;
  ${() => props.count >= 9 && css`
		width: 18px;
		height: 18px;
		padding: 3px 2.5px;
  `}
`;
  return (
		<Fragment>
			<Counter>{props.count <= 9 ? props.count : '9+'}</Counter>
		</Fragment>
  );
};

export default NotificationCounter;
