import React, { Fragment } from 'react';
import styled from 'styled-components';
import OptionIcon from '../../../assets/images/svgs/option.svg';

// eslint-disable-next-line no-undef
const toggleOptionsVisibility = () => $(document).ready(() => {
  // eslint-disable-next-line no-undef
  $('.ui.dropdown').dropdown();
});

const Option = ({ displayStyle, handleOnClick }) => {
  toggleOptionsVisibility();
  return (
    <Fragment>
      <div className="ui dropdown">
        <Option.Icon styles={displayStyle} src={OptionIcon} />
        <Option.Menu className="left secondary menu">
          <Option.Text className="item">New</Option.Text>
          <Option.Text className="item">Test</Option.Text>
          <Option.Text className="item">Game</Option.Text>
        </Option.Menu>
      </div>
    </Fragment>
  );
};

Option.Menu = styled.div`
  padding: 0.5rem 0.4rem;
  `;

Option.Text = styled.p`
  font-family: 'Circular-Light';
  font-size: 14px;
  line-height: 14px;
  padding: 0.5rem 0.4rem;
`;

Option.Icon = styled.img`
	width: 12.92px;
	height: 15px;
  ${props => props.styles}
`;

export default Option;
