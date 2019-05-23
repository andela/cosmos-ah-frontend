import React, { Fragment } from 'react';
import Article from '../../Content/Article';

const MainLayout = () => (
  <div className="ui one centered grid stackable">
    <div className="ten wide column">
      <Article />
    </div>
  </div>
);

export default MainLayout;
