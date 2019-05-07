import React, { Fragment } from 'react';
import styled from 'styled-components';

const Avatar = ({ avatarUrl, customStyle, }) => (
	<Fragment>
		<Avatar.Container customStyle={customStyle} src={avatarUrl} />
	</Fragment>
);

Avatar.Container = styled.img`
  min-height: 250px;
  max-width: 350px;
  border-radius: 25px;
  ${props => props.customStyle};
`;

export default Avatar;
