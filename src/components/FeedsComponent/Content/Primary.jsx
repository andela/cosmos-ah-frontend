/* eslint-disable no-undef */
/* eslint-disable no-new */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Paragraph } from '../../shared/Text/Text';

import { truncate } from '../../../utils/articles';

const Avatar = styled.img`
  width: 40px!important;
  height: 40px!important;
  border-radius: 50px;
`;

const Primary = ({ newArticles }) => {
  const articleFeeds = [];
  if (typeof newArticles === 'object') {
    articleFeeds.push(newArticles);
  } else {
    const [articleProps] = newArticles;
    articleFeeds.push(...articleProps);
  }

  if (articleFeeds.length < 1) {
    return (
      <Primary.Wrapper>
        <Primary.Content>
          <Primary.Card>
            <Paragraph>
              No Article found at the moment
            </Paragraph>
            <a className="read-more" onClick={() => window.location.reload()}>Refresh</a>
          </Primary.Card>
        </Primary.Content>
      </Primary.Wrapper>
    );
  }

  return (
    <Primary.Wrapper>
      <Primary.Content>
      {newArticles.map((value, index) => (<Primary.Card className="text-focus-in" key={index + 1}>
          <h4>{value.title}</h4>
          <h5>{value.author.fullName}</h5>
          <Link className="read-more" to={`/articles/${value.id}`}>Read More</Link>
        </Primary.Card>
      ))}
      </Primary.Content>
    </Primary.Wrapper>
  );
};

Primary.Wrapper = styled.div`

`;

Primary.Content = styled.div`

`;

Primary.Card = styled.div`
  padding: 0.5rem 1rem;
  box-shadow: 2px 2px 24px rgba(138,137,137,0.47);
  border-radius: 5px;
  background: white;
  margin: 10px 0;
  h4 {
    font-family: 'Circular-Book';
    margin-bottom: 5px;
    color: #403e3e;
  }
  h5 {
    font-family: 'Circular-Light';
    font-size: 0.8rem;
    margin: 0.5rem 0;
    color: #818b94;
    font-style: italic;
  }
  p {
    margin-bottom: 5px;
    font-size: 0.9rem;
    color: #808080;
  }
  .read-more {
    font-family: 'Circular-Bold';
    font-family: 14px;
    font-size: 0.8rem;
  }
`;

export default Primary;
