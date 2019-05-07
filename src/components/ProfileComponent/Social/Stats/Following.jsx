import React, { Fragment } from 'react';
import { Paragraph } from '../../../shared/Text/Text';

const Following = ({ following, paragraphStyle }) => (
  <Fragment>
    <Paragraph paragraphStyle={paragraphStyle}>{following || 10} following</Paragraph>
  </Fragment>
);

export default Following;
