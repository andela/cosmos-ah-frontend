import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import ArticleCard from '../components/ArticleCard';
import { getArticleAction } from '../state/article/actions';
import SecondaryNav from '../components/shared/Navigation/SecondaryNav';


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
  // display: flex;
  flex-direction: row;
`;

const MainArticleCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  padding: 20px;
  margin: 15px;
  border-radius: 8px;
  transition: 0.3s;
  width: 600px;
  height: 400px;
`;

const Wrapper = styled.div`
  display: flex
  flex-direction: row;
`;

const CardFooter = styled.div`
  color: grey;
  text-align: right;
`;

export const Feeds = props => {
  useEffect(() => {
    props.getArticles();
  }, []);
  return (
    <Body>
      <Background>
        <Fragment>
          <SecondaryNav/>
          <Wrapper>
            <div>
              {props.articles.slice(0, 2).map(article => (
              <ArticleCard article={article} key={article.id} />
              ))}
            </div>
            <MainArticleCard>
                <Header>
                  <h2>The Killer of  the 21st Century</h2>
                </Header>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  dolor sit amet, consectetuer adipiscing elit. dolor sit amet,
                  consectetuer adipiscing elit</p>
                {/* <Link to={`/articles/${article.id}`}>Read More</Link> */}
                <CardFooter>
                  <Header disabled header>
                    <h4>Popular on Authors Haven</h4>
                  </Header>
                </CardFooter>
            </MainArticleCard>
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
