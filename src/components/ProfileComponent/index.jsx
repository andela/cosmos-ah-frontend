import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import Preloader from '../shared/Loaders/ContentLoader';

import { getProfile } from '../../state/profile/actions';
import { getProfileSelector } from '../../state/profile/selectors';

const ProfileComponent = props => {
  const { match: { params: { id } } } = props;
  const { profile: { isLoading, loadedData } } = props;
  useEffect(() => {
    async function fetchData() {
      return props.getProfile(id);
    }
    fetchData();
  }, []);
  if (!isLoading) { return (<Preloader />); }
  return (
    <Fragment>
      <Layout profileData={loadedData}/>
    </Fragment>
  );
};

const mapStateToProps = state => ({ profile: getProfileSelector(state) });

export default connect(mapStateToProps, { getProfile, })(withRouter(ProfileComponent));
