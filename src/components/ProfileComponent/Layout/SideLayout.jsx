import React, { Fragment } from 'react';
import Avatar from '../Avatar';
import altImageSrc from '../../../assets/images/avatars/default.jpg';

const Layout = ({ imageSrc, imageAlt }) => (
	<div className="five wide column tablet hidden computer only">
		<Avatar avatarUrl={imageSrc || altImageSrc} alt={imageAlt || 'Authors Haven'}/>
	</div>
);

export default Layout;
