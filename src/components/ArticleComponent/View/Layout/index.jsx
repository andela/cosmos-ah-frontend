import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navigation from '../../../shared/Navigation/Navigation';
import MainLayout from './MainLayout';

const Layout = () => (
  <Fragment>
    <Navigation />
    <Layout.Wrapper className="ui container">
      <MainLayout />
    </Layout.Wrapper>
  </Fragment>
);

Layout.Wrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export default Layout;
