import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';

const CreateArticle = () => (
  <Fragment>
    <Layout />
  </Fragment>
);

export default withRouter(CreateArticle);
