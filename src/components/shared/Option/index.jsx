import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const toggleOptionsVisibility = () => {
  // eslint-disable-next-line no-undef
  $(document).ready(() => {
    // eslint-disable-next-line no-undef
    $('.ui.dropdown').dropdown();
  });
};

const Option = ({ displayStyle, handleOnClick }) => {
  toggleOptionsVisibility();
  return (
    <Fragment>
        <div className="ui dropdown btn-dropdown-color" >
          <i className="dropdown icon"></i>
        <Option.Menu className="left secondary menu">
          <Option.Text className="item"><Link to='/feeds'>Feeds</Link></Option.Text>
          <Option.Text className="item"><Link to='/dashboard'>Dashboard</Link></Option.Text>
          <Option.Text className="item"><Link to='/profile'>Profile</Link></Option.Text>
          <Option.Text className="item"><Link to=''>Logout</Link></Option.Text>
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
