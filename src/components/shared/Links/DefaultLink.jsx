import React from 'react';
import { Link } from 'react-router-dom';

export const RouteLink = ({ classList, to, children, styleList, handleClick }) => (
	<Link onClick={handleClick} style={styleList} className={classList} to={to}>{children}</Link>
);

const DefaultLink = ({ classList, href, children, handleClick, styleList, isDanger }) => (
	<a onClick={handleClick} style={{ color: isDanger ? 'red' : null }} className={classList} href={href}>{children}</a>
);


export default DefaultLink;
