import React, { Fragment } from 'react';
import styled from 'styled-components';

import bell from '../../../../../../assets/images/svgs/notification.svg';

const Icon = styled.img`
  width: 30px !important;
  height: 30px !important;
`;

const NotificationIcon = props => (
  <Fragment>
		<Icon src={bell} />
  </Fragment>
);

export default NotificationIcon;
