import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import Preloader from '../shared/Loaders/ContentLoader';

import { getProfile } from '../../state/profile/actions';
import { getProfileSelector } from '../../state/profile/selectors';

const ProfileComponent = props => {
  const { profile: { isLoading, loadedData } } = props;
  console.log(props);
  useEffect(() => {
    async function fetchData() {
      return props.getProfile();
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

export default connect(mapStateToProps, { getProfile, })(ProfileComponent);
