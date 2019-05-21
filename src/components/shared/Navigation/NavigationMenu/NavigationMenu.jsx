import React, { Fragment } from 'react';
import styled from 'styled-components';
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
			<Notification notifications={props.notifications} />
			<ProfileAvatar notifications={props.notifications} />
		</RightMenu>
		</div>
	</Fragment>
);

export default NavigationLinks;
