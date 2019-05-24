import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Notification from './Notification/Notification';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';

const RightMenu = styled.div`
  display: flex;
  min-width: 150px;
	justify-content: space-between;
`;

const NavigationLinks = props => (
  <Fragment>
		<div className="right menu">
		<RightMenu>
			<Link to='/article/create' style={{ margin: 'auto', fontWeight: 'bolder' }}> Create Article</Link>
			<Notification notifications={props.notifications} />
			<ProfileAvatar notifications={props.notifications} />
		</RightMenu>
		</div>
	</Fragment>
);

export default NavigationLinks;
