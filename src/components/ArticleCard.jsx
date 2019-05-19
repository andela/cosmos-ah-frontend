import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import truncatise from 'truncatise';

const CardContentContainer = styled.div`
  width: 75%;
  margin-top: 20px;
`;

const options = {
  TruncateLength: 30,
  TruncateBy: 'words',
  Strict: false,
  StripHTML: true,
  Sufix: 'Read More'
};

const ArticleCard = ({ article }) => (
  <Grid textAlign="left" verticalAlign="middle" padded>
    <Grid.Column>
      <CardContentContainer>
        <h2>
          {article.title}
        </h2>
        <p>
          {truncatise(article.body, options)}
        </p>
        <Link to={`/articles/${article.id}`}>Read More</Link>
      </CardContentContainer>
    </Grid.Column>
  </Grid>
);

export default ArticleCard;
