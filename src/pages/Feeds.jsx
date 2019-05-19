import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ArticleCard from '../components/ArticleCard';
import { getArticleAction } from '../state/article/actions';
import SearchInput from '../components/shared/Widgets/SearchInput';
import DropdownSelect from '../components/shared/Widgets/Dropdown';
import invertedSearch from '../assets/images/svgs/invertedSearch.svg';
import Logo from '../components/shared/Navigation/Logo/Logo';
import NavigationLinks from '../components/shared/Navigation/NavigationMenu/NavigationMenu';
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

// Search input constants
const backgroundColor = '#FFFFFF';
const textInputColor = '#808080';
const width = '400px';
const border = '2';
const placeholder = 'Find the stories you love';

// Dropdown constants
const dropDownItems = [
  {
    key: 'Trending',
    text: 'Trending',
    value: 'Trending'
  },

  {
    key: 'Tech',
    text: 'Tech',
    value: 'Tech'
  },

  {
    key: 'Culture',
    text: 'Culture',
    value: 'Culture'
  },

  {
    key: 'People',
    text: 'People',
    value: 'People'
  }
];

const MainNavbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  // box-shadow: 0px 4px 10px rgba(138,137,137,0.1);
  padding:20px 40px;
`;

const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-left: 150px;
`;

const SearchIcon = styled.img`
   position: absolute;
   top: 10px;
   left: 10px;
   width: 15px;
   height: 15px,
`;

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  align-items: stretch;
`;

const DropdownSearchbar = styled.div`
  display: flex;
  justify-content: space-between;
  // flex:1 1 auto !important;
  flex-grow:1;
  height:40px;
`;

const SecondNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow:1;
  margin-left: 250px;
  // background-color: pink;
`;

const Gap = styled.div`
  display: flex;
  justify-content: space-between;
  // flex:1 1 auto !important;
`;

export const Feeds = props => {
  useEffect(() => {
    props.getArticles();
  }, []);
  return (
    <Body>
      <MainNavbarContainer>
        <div>
          <Logo />
        </div>
        <SecondNavbarContainer>
          <DropdownSearchbar>
            <DropdownSelect
              dropDownItems={ dropDownItems }
              placeholder={ placeholder }
            />
            <SearchBarWrapper>
              <SearchIcon src={invertedSearch}/>
              <SearchInput
                backgroundColor={backgroundColor}
                width={width}
                textInputColor={textInputColor}
                border = {border}
                placeholder = {placeholder}
              />
             </SearchBarWrapper>
          </DropdownSearchbar>
          <Gap>
            <NavigationLinks />
          </Gap>
        </SecondNavbarContainer>
      </MainNavbarContainer>
      <Background>
        <Fragment>
          <Wrapper>
            <Container>
            <div>
              {props.articles.slice(0, 3).map(article => (
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
