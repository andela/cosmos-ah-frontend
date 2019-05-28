import React from 'react';
import styled from 'styled-components';
import Article from '../../Content/Article';
import SocialShare from '../../../../SocialShare';


const MainLayout = () => (
  <div className="ui one centered grid stackable">
    <div className="two column">
      <SocialDiv>
        <SocialShare />
      </SocialDiv>
    </div>
    <div className="ten wide column">
      <Article />
    </div>
  </div>
);

const SocialDiv = styled.div`
margin-top: 100px
`;

export default MainLayout;
