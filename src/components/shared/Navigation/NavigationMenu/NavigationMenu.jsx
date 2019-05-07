import React, { Fragment } from 'react';
import Notification from './Notification/Notification';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';

const NavigationLinks = props => (
  <Fragment>
		<div className="right menu">
			<Notification notifications={props.notifications} />
			<ProfileAvatar notifications={props.notifications} />
		</div>
	</Fragment>
);

export default NavigationLinks;
