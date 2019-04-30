import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getArticleAction } from '../state/article/actions';

class ArticleListContainer extends Component {
    componentDidMount = () => {
      this.props.getArticleAction();
    }

    render() {
      return (
            <Fragment>
                <h3>Article List</h3>
                <div>
                    {this.props.articles.map(article => (
                        <div key={article.id}>
                            <h3>{article.title}</h3>
                            <p>{article.body}</p>
                        </div>
                    ))}
                </div>
            </Fragment>
      );
    }
}

const mapStateToProps = state => ({
  articles: state.article.articles
});

const mapDispatchToProps = {
  getArticleAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer);
