import React, { Fragment } from 'react';
import styled from 'styled-components';

import NotificationIcon from './NotificationIcon/NotificationIcon';
import NotificationCounter from './NotificationCounter/NotificationCounter';

const Wrapper = styled.div``;

const Notification = props => (
  <Wrapper className="item">
    <NotificationIcon />
    <NotificationCounter count={props.notification || 0} />
  </Wrapper>
);

export default Notification;
