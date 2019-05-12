import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import ArticleUtil from '../../../utils/articles';

const { parseArticleCreationDate } = ArticleUtil;

const StyledColumn = styled(Grid.Column)`
  text-align: center;
`;

const StyledNumber = styled.p`
  font-size: 1.8em;
  color: #aaa;
`;

const ArticleAuthor = styled.p`
  padding: 0;
  margin: 0;
`;

const ArticleSecondaryCard = ({ article, count }) => (
    <Grid.Row>
      <StyledColumn width={4} verticalAlign="middle">
        <StyledNumber>0{count + 1}</StyledNumber>
      </StyledColumn>

      <Grid.Column>
        <h3>{article.title}</h3>
        <ArticleAuthor>Jane Doe</ArticleAuthor>
        <span>{parseArticleCreationDate(article.createdAt)} &middot; {article.totalReadTime} {article.totalReadTime > 1 ? 'mins' : 'min'} read</span>
      </Grid.Column>
    </Grid.Row>
);

ArticleSecondaryCard.propTypes = {
  article: PropTypes.object.isRequired,
  count: PropTypes.number
};

export default ArticleSecondaryCard;
