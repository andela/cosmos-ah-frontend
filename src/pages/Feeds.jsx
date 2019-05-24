import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getArticleAction } from '../state/article/actions';

import { FeedsComponent } from '../components/FeedsComponent';

export const Feeds = props => (<FeedsComponent />);

const mapStateToProps = state => ({
  articles: state.articles.allArticles,
});

export const connectedFeed = connect(mapStateToProps, { getArticles: getArticleAction })(Feeds);
