import React, { Fragment } from 'react';
import Avatar from '../Avatar';
import AvatarSrc from '../../../assets/images/avatars/default.jpg';

const Layout = ({ altImageSrc, imageAlt, }) => (
	<div className="five wide column tablet hidden computer only">
		<Avatar avatarUrl={AvatarSrc || altImageSrc} alt={imageAlt || 'Authors Haven'}/>
	</div>
);

export default Layout;
