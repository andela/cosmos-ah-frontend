import React, { useEffect, Fragment } from 'react';
import { withRouter, Link, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { colors } from '../../../../../lib/colors';
import { PrimaryTitle, Paragraph, } from '../../../../shared/Text/Text';
import LoadingImage from '../../../../../assets/images/svgs/wait.svg';
import DefaultLink from '../../../../shared/Links/DefaultLink';

import { getArticleByID } from '../../../../../state/article/actions';
import { articleSelector, vieweArticleSelector } from '../../../../../state/article/selectors';

import { setArticleOnUpdate, } from '../../../../../state/create-article/actions';

const Avatar = styled.img`
  width: 50px!important;
  height: 50px!important;
  border-radius: 50px;
`;

const TagSection = styled.div`
  margin: 2rem 0;
`;

const Preloader = styled.div`
  text-align: center;
`;

const PreloadImage = styled.img`
  height: 200px;
  margin: 2rem 0 0;
`;

const ArticleContent = props => {
  const { articles, match: { params: { id }, },
    getByID, articleIsViewed, history, setArticleUpdate,
  } = props;
  const { allArticles } = articles;
  useEffect(() => {
    getByID(allArticles, id);
  }, [allArticles, id]);

  if (!articleIsViewed || !articleIsViewed.data) {
    return (
      <Preloader>
        <PreloadImage src={LoadingImage} />
      </Preloader>
    );
  }
  setArticleUpdate(articles.articleIsViewed.data);

  const { title, body, author, createdAt, totalReadTime, tags, } = articleIsViewed.data;
  const tagLists = tags.map((tag, i) => {
    const colorsLength = colors.length;
    const min = Math.ceil(0);
    const max = Math.floor(colorsLength);
    const classIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    const classes = [colors[classIndex], 'tag'].join(' ');
    return (<li className={classes} key={i}><Link to={`/tags/${tag}`}>{tag}</Link></li>);
  });

  return (
    <Fragment>
      <PrimaryTitle classList="text-focus-in">{title}</PrimaryTitle>
      <ArticleContent.Meta className="text-focus-in align-c">
        <Link to={`/profile/${author.id}`}><Avatar className='avatar' src={author.imageUrl}/></Link>
        <div className="u-paddingLeft15" style={{ width: '100%' }}>
          <ArticleContent.Header>
            <Paragraph>
              <Link style={{ fontFamily: 'Circular-Book', fontSize: '17px', color: 'inherit' }} to={`/profile/${author.id}`}>{author.fullName}</Link>
            </Paragraph>
            <ArticleContent.Option className='article-handle-links'>
              <DefaultLink classList='normal-bk' handleClick={() => history.push(`/article/edit/${id}`)} children='Edit' />
              <DefaultLink classList='red-bk' handleClick={() => true} children='Delete' isDanger={true} />
            </ArticleContent.Option>
          </ArticleContent.Header>
          <ArticleContent.Span>
            <Paragraph paragraphStyle={{ fontFamily: 'Circular-Light' }}>
              {moment(createdAt).fromNow()}
            </Paragraph>
            <Paragraph paragraphStyle={{ fontFamily: 'Circular-Light', marginLeft: '10px' }}>
              {totalReadTime > 1 ? `${totalReadTime} mins read` : 'Less than a minute'}
            </Paragraph>
          </ArticleContent.Span>
        </div>
      </ArticleContent.Meta>
      <ArticleContent.Main className="text-focus-in main-article-content" dangerouslySetInnerHTML={{ __html: body }} />
      <br />
      <TagSection className="tags">
        {tagLists}
      </TagSection>
    </Fragment>
  );
};

ArticleContent.Main = styled.div`
  p {
    line-height: 25px;
    font-size: 17px;
    margin-bottom: 2rem;
    text-align: justify;
  }
`;

ArticleContent.Span = styled.span`
  display: flex;
  margin: 3px 0 0;
`;

ArticleContent.Meta = styled.div`
  margin-top: 24px!important;
  margin-bottom: 24px!important;
  display: flex;
  p {
    margin-bottom: 0px;
  }
`;

ArticleContent.Option = styled.div`
  float: right;
  text-align: right;
  a {
    font-family: Circular-Book !important;
    margin-left: 10px;
    cursor: pointer;
    border: 1px solid;
    padding: 0.2rem 1rem;
    border-radius: 3px;
    &:hover {
      text-decoration: underline;
      text-decoration: underline;
      background: inherit;
      color: white !important;
      opacity: 0.8;
    }
  }
`;

ArticleContent.Header = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const mapStateToProps = state => ({
  articles: articleSelector(state),
  articleIsViewed: vieweArticleSelector(state),
});

export default connect(
  mapStateToProps,
  {
    getByID: getArticleByID,
    setArticleUpdate: setArticleOnUpdate,
  },
)(withRouter(ArticleContent));
