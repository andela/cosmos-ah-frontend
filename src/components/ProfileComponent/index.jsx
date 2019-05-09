import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import Preloader from '../shared/Loaders/ContentLoader';

const ProfileComponent = props => {
  const { profile: { isLoading, data } } = props;
  if (!isLoading) { return (<Preloader />); }
  return (
    <Fragment>
      <Layout profileData={data}/>
    </Fragment>
  );
};

export default connect(props => props, null)(ProfileComponent);
