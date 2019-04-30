import React from 'react';

const ArticleList = ({ articles }) => (
  <div>
    {articles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
    ))}
  </div>
);

export default ArticleList;
