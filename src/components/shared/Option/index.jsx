import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOutUser } from '../../../state/auth/action';
import DefaultAvatar from '../../../assets/images/avatars/default.jpg';

const Avatar = styled.img`
	height: 50px !important;
	width: 45px !important;
  border-radius: 50px;
`;

const toggleOptionsVisibility = () => {
  // eslint-disable-next-line no-undef
  $(document).ready(() => {
    // eslint-disable-next-line no-undef
    $('.ui.dropdown').dropdown();
  });
};

const Option = props => {
  toggleOptionsVisibility();
  return (
    <Fragment>
      <div className="ui dropdown btn-dropdown-color">
        <Avatar src= { props.user.imgUrl || DefaultAvatar} />
        <Option.Menu className="left secondary menu">
          <Option.Text className="item">{props.user.username}</Option.Text>
          <Option.Text className="item"><Link to='/feeds'>Feeds</Link></Option.Text>
          <Option.Text className="item"><Link to= {`/profile/${props.user.id}`} >Profile</Link></Option.Text>
          <Option.Text className="item"><Link to='#' onClick = {() => props.signOutUser(props.history)}>Logout</Link></Option.Text>
        </Option.Menu>
      </div>
    </Fragment>
  );
};

Option.Menu = styled.div`
  padding: 0.5rem 0.4rem;
  `;

Option.Text = styled.div`
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

const mapStateToProps = state => ({
  user: state.auth.signin
});

export default connect(mapStateToProps, { signOutUser })(withRouter(Option));
