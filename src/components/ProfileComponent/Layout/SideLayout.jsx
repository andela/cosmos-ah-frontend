import React, { Fragment } from 'react';
import Avatar from '../Avatar';
import AvatarSrc from '../../../assets/images/avatars/default.jpg';

const Layout = props => (
	<div className="five wide column tablet hidden computer only">
	<Avatar imageStyle avatarUrl={AvatarSrc} />
	</div>
);

export default Layout;
