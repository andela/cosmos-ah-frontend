import React from 'react';
import styled from 'styled-components';

const Likes = () => (
  <Likes.Wrapper className="ui columns">
    <div className="ui cards one column wide">
      <div className="card" style={{ margin: '.875em 0' }}>
        <div className="content">
          <div className="header">Elliot Fu</div>
          <div className="meta">Friend</div>
          <div className="description">Elliot Fu is a film-maker from New York.</div>
        </div>
      </div>
    </div>
  </Likes.Wrapper>
);

Likes.Wrapper = styled.div``;

export default Likes;
