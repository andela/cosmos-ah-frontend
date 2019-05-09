import React from 'react';
import styled from 'styled-components';
import MainLayout from './MainLayout';
import SideLayout from './SideLayout';

const Wrapper = styled.div`
  margin: 5rem 0;
`;

const Layout = ({ profileData }) => (
  <Wrapper className="ui container">
    <section className="ui three centered column grid stackable">
      <div className="row">
        <MainLayout profileData={profileData} />
        <div className="one wide column"></div>
        <SideLayout imageSrc={profileData.imageUrl} />
      </div>
    </section>
  </Wrapper>
);

export default Layout;
