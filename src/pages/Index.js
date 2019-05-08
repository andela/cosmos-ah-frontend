import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePageBody from '../components/HomePageBody';
import ShowCase from '../components/ShowCase';
import '../assets/css/fonts.css';
import { getArticleAction } from '../state/article/actions';

const defaultImage = 'https://pbs.twimg.com/profile_images/977609983079735297/h8yBKt0r_400x400.jpg';

const articles = [
  {
    id: 1,
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    title: 'my-article',
    author: 'Arya',
    image: defaultImage
  },

  {
    id: 2,
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    title: 'my-article',
    author: 'Arya',
    image: defaultImage
  }
];

const getLargestReadCount = allArticles => {
  let largestReadCount = 0;
  for (let i = 0; i < articles.length; i += 1) {
    const { readCount } = allArticles[i];
    if (readCount > largestReadCount) {
      largestReadCount = readCount;
    }
  }
  return largestReadCount;
};

const getTrendingArticles = allArticles => allArticles.find(
  article => article.readCount === getLargestReadCount(allArticles)
);

class Home extends Component {
  render() {
    const trendingArticle = getTrendingArticles(this.props.articles);
    return (
      <div>
      <ShowCase article={trendingArticle} />
      <HomePageBody articles={articles} articleImg={defaultImage} />
    </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.article.articles
});

export default connect(mapStateToProps, { getArticles: getArticleAction })(Home);
