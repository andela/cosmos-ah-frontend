import React, { Fragment } from 'react';
import Article from '../../Content/Article';
import SocialShare from '../../../../SocialShare';

const MainLayout = () => (
  <div className="ui one centered grid stackable">
    <div className="two column text-focus-in" style={{ marginTop: '100px' }}>
      <SocialShare />
    </div>
    <div className="ten wide column">
      <Article />
    </div>
  </div>
);

export default MainLayout;
