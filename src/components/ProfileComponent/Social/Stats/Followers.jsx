import React, { Fragment } from 'react';
import { Paragraph } from '../../../shared/Text/Text';

const Followers = ({ followers, paragraphStyle }) => (
  <Fragment>
    <Paragraph paragraphStyle={paragraphStyle}>{followers || 0} followers</Paragraph>
  </Fragment>
);

export default Followers;
