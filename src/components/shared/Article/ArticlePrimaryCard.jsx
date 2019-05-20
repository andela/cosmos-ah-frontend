/* eslint-disable */
import React, { Fragment } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArticleUtil from '../../../utils/articles';
import bookmarkIcon from '../../../assets/images/svgs/bookmark.svg';

const { parseArticleCreationDate } = ArticleUtil;

const CardContentContainer = styled.div`
  margin-bottom: 20px;
`;

const ArticleReadTime = styled.span`
  color: #3A8FDD;
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  grid-template-rows: 1fr;
  @media(max-width: 768px) {
    display: block;
  }
`;

const StyledImage = styled(Image)`
 @media(max-width: 768px) {
    &&& {
      display: none;
    }
  }
`;

const BookmarkIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;


const BookmarkIconContainer = styled.div`
  display: none;
  @media(max-width: 768px) {
    display: inline-block;
    flex: 1 0 10%;
  }
`;

const MainBookmarkIcon = styled.img`
  width: 20px;
  height: 20px;
  @media(max-width: 768px) {
    display: none;
  }
`;

const FlexContainer = styled.div`
  @media(max-width: 768px) {
    display: flex;
  } 
`;

const NormDetails = styled.div`
  flex: 1 1 90%;
  * {
    margin-right: 5px;
    font-family: 'Circular-Light';
  }
`;

const AuthorName = styled.span`
  font-family: 'Circular-Book'
`;

const ArticleTitleLink = styled(Link)`
  color: #333333;
  &:hover {
    color: #111111;
  }
`;

const ArticlePrimaryCard = ({
  article: {
    id, title, description, author, createdAt, imageUrl, totalReadTime
  },
  handleBookmarkClick
}) => (
    <Article>
      <CardContentContainer>
        <ArticleTitleLink to={`/article/${id}`}>
          <h3>{title}</h3>
        </ArticleTitleLink>
        <p>{description}</p>
        <FlexContainer>
          <NormDetails>
            <AuthorName>{author.fullName}</AuthorName>
            <span>
              {parseArticleCreationDate(createdAt)}
              {' '}&middot;
            </span>{' '}
            <ArticleReadTime data-testid={`article-read-time-${id}`}>
              {totalReadTime} {totalReadTime > 1 ? 'mins' : 'min'} read
            </ArticleReadTime>{' '}
            <Icon name="star" size="small" color="grey" data-testid={`card-icon-${id}`} />
          </NormDetails>
          {/*  */}
          <BookmarkIconContainer>
            <BookmarkIcon src={bookmarkIcon} alt="" onClick={handleBookmarkClick} />
          </BookmarkIconContainer>
        </FlexContainer>
      </CardContentContainer>
      <div>
        {/* Space left intentionally */}
      </div>
      <div>
        <StyledImage src={imageUrl} alt="" width={100} height={100} rounded />
      </div>
    </Article>
  );

ArticlePrimaryCard.propTypes = {
  article: PropTypes.object.isRequired,
  handleBookmarkClick: PropTypes.func
};

export default ArticlePrimaryCard;
