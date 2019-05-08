import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import HomePageBody from '../components/HomePageBody';
import Hero from '../components/Hero';
import '../assets/css/fonts.css';
import { getArticleAction } from '../state/article/actions';

const defaultImage = 'https://pbs.twimg.com/profile_images/977609983079735297/h8yBKt0r_400x400.jpg';

const Home = props => (
    <div>
      <Hero />
      <HomePageBody articleImg={defaultImage} />
    </div>
);


const mapStateToProps = state => ({
  articles: state.article.articles
});

export default connect(mapStateToProps, { getArticles: getArticleAction })(Home);
