import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ArticleCard from '../components/ArticleCard';
import { getArticleAction } from '../state/article/actions';
import SecondaryNav from '../components/shared/Navigation/SecondaryNav';
import MainArticleCard from '../components/MainArticleCard';


const Body = styled.div`
  background-color: #fff;
`;

const Background = styled.div`
  margin: 0;
  padding: 30px;
  background-image: url('https://res.cloudinary.com/raymondosy/image/upload/v1557386632/Screenshot_2019-05-09_at_7.57.00_AM_y0hvl6.png');
  background-color: #FFFFFF;
  height: 100vh;
  background-size: 100% 100%;
  justify-content: space-between;
  flex-direction: row;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  align-items: stretch;
`;

export const Feeds = props => {
  useEffect(() => {
    props.getArticles();
  }, []);
  return (
    <Body>
      <Background>
        <Fragment>
          <SecondaryNav />
          <Wrapper>
            <Container>
            <div>
              {props.articles.slice(0, 2).map(article => (
              <ArticleCard article={article} key={article.id} />
              ))}
            </div>
            </Container>
            <Container>
              <div>
                {props.articles.slice(0, 1).map(article => (
                <MainArticleCard article={article} key={article.id} />
                ))}
              </div>
            </Container>
          </Wrapper>
        </Fragment>
      </Background>
    </Body>
  );
};

const mapStateToProps = state => ({
  articles: state.articles.allArticles,
});

export const connectedFeed = connect(mapStateToProps, { getArticles: getArticleAction })(Feeds);
