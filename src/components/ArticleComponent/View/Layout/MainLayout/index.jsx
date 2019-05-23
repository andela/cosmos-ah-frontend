import React, { Fragment } from 'react';
import Article from '../../Content/Article';
import SocialShare from '../../../../SocialShare';

const MainLayout = () => (
  <div className="ui one centered grid stackable">
    <div className="two wide column" style={{ marginTop: '50px' }}>
       <SocialShare />
    </div>
    <div className="ten wide column">
      <Article />
    </div>
  </div>
);

export default MainLayout;
