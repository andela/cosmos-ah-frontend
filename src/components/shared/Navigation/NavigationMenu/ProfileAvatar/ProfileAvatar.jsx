import React, { Fragment } from 'react';
import styled from 'styled-components';

import Dropdown from '../../../Option/index';

const ProfileAvatar = props => (
  <Fragment>
		<div className="item">
			<Dropdown imageSrc={props.imageSrc} />
		</div>
	</Fragment>
);

export default ProfileAvatar;
