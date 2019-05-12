import React, { Fragment } from 'react';
import styled from 'styled-components';

import Content from '../../Content';

const MainLayout = () => (
  <MainLayout.Wrapper className="ui one centered column grid stackable">
    <div className="wide column">
      <Content />
    </div>
  </MainLayout.Wrapper>
);

MainLayout.Wrapper = styled.div`
`;

export default MainLayout;
