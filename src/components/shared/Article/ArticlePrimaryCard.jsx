import React, { Fragment } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark';
import ArticleUtil from '../../../utils/articles';

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

const MobileBookmarkIcon = styled(Bookmark)``;


const BookmarkIconContainer = styled.div`
  display: none;
  @media(max-width: 768px) {
    display: inline-block;
    flex: 1 0 10%;
  }
`;

const MainBookmarkIcon = styled(Bookmark)`
  vertical-align: bottom;
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

const MainBookmarkIconContainer = styled.div`
  align-self: end;
  padding: 20px;
  @media(max-width: 768px) {
    display: none;
  }
`;

const ArticlePrimaryCard = ({
  article: {
    id, title, description, author, createdAt, imageUrl, totalReadTime
  },
  handleBookmarkClick,
  favoriteIcon
}) => (
    <Article>
      <CardContentContainer>
        <ArticleTitleLink to={`/articles/${id}`}>
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
          </NormDetails>
          <BookmarkIconContainer>
            <MobileBookmarkIcon
              displayStyle={{
                cursor: 'pointer'
              }}
              data-testid={`card-icon-${id}`}
              handleOnClick={handleBookmarkClick}
            />
          </BookmarkIconContainer>
        </FlexContainer>
      </CardContentContainer>
      <MainBookmarkIconContainer>
        <MainBookmarkIcon
          displayStyle={{
            cursor: 'pointer'
          }}
          data-testid={`card-icon-${id}`}
          handleOnClick={handleBookmarkClick}
        />
      </MainBookmarkIconContainer>
      <div>
        <StyledImage src={imageUrl[0]} alt="" width={100} height={100} rounded />
      </div>
    </Article>
);

ArticlePrimaryCard.propTypes = {
  article: PropTypes.object.isRequired,
  handleBookmarkClick: PropTypes.func,
  favoriteIcon: PropTypes.element
};

export default ArticlePrimaryCard;
