import React from 'react';
import styled from 'styled-components';
import MainLayout from './MainLayout';
import SideLayout from './SideLayout';

const Wrapper = styled.div`
  margin: 5rem 0;
`;

const Layout = () => (
  <Wrapper className="ui container">
    <section className="ui two centered column grid stackable">
      <div className="row">
        <MainLayout />
        <SideLayout />
      </div>
    </section>
  </Wrapper>
);

export default Layout;
