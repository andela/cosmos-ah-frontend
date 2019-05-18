import React, { Fragment } from 'react';
import ArticleContent from '../../Content/Article';

const MainLayout = () => (
  <div className="ui one centered grid stackable">
    <div className="ten wide column">
      <ArticleContent />
    </div>
  </div>
);

export default MainLayout;
