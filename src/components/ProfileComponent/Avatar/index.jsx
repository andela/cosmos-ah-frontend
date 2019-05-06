import React, { Fragment } from 'react';
import styled from 'styled-components';

const Avatar = ({ avatarUrl, imageStyle }) => (
	<Fragment>
		<Avatar.Container src={avatarUrl} />
	</Fragment>
);

Avatar.Container = styled.img`
  min-height: 250px;
  max-width: 350px;
  border-radius: 25px;
`;

export default Avatar;
