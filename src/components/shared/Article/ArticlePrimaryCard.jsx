import React, { Fragment } from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArticleUtil from '../../../utils/articles';

const { parseArticleCreationDate } = ArticleUtil;

const CardContentContainer = styled.div`
  margin-bottom: 20px;
`;

const ArticlePrimaryCard = ({ article }) => (
      <Fragment key={article.id}>
        <CardContentContainer>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <span>{article.author}</span>
          <span>
            {parseArticleCreationDate(article.createdAt)}
            &nbsp;&middot;
          </span>&nbsp;
          <ArticleReadTimeSpan>
            {article.totalReadTime} {article.totalReadTime > 1 ? 'mins' : 'min'} read
          </ArticleReadTimeSpan>&nbsp;
          <Icon name="star" size="small" color="grey" />
        </CardContentContainer>
        <div>
          {/* Space left intentionally */}
        </div>
        <div>
          <Image src={article.imageUrl} alt="" width={100} height={100} rounded />
        </div>
      </Fragment>
);

ArticlePrimaryCard.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticlePrimaryCard;
