import React from 'react';
import Loader from 'react-content-loader';
import styled from 'styled-components';

const ContentLoader = props => (
  <ContentLoader.Wrapper>
    <Loader
      height={1000}
      width={1000}
      speed={1}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="700" y="15" rx="20" ry="20" width="250" height="300" />
      <rect x="100" y="17" rx="10" ry="10" width="420" height="20" />
      <rect x="100" y="50" rx="10" ry="10" width="315" height="15" />
      <rect x="100" y="130" rx="3" ry="3" width="500" height="5" />
      <rect x="100" y="145" rx="3" ry="3" width="500" height="5" />
      <rect x="100" y="180" rx="3" ry="3" width="500" height="5" />
      <rect x="100" y="195" rx="3" ry="3" width="500" height="5" />
      <rect x="100" y="240" rx="5" ry="5" width="100" height="13" />
      <rect x="150" y="240" rx="5" ry="5" width="100" height="13" />
    </Loader>
  </ContentLoader.Wrapper>
);

ContentLoader.Wrapper = styled.div`
  width: 80%;
  margin: 50px auto 0;
`;

export default ContentLoader;
