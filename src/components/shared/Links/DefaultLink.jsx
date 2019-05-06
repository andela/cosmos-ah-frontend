import React, { Fragment } from 'react';

const DefaultLink = ({ classList, href, children, }) => (
	<a className={classList} href={href}>{children}</a>
);

export default DefaultLink;
