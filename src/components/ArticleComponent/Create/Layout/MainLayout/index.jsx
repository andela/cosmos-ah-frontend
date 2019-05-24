import React, { Fragment } from 'react';
import styled from 'styled-components';

import ContentDefault from '../../Content';

const MainLayout = () => (
  <div className="ui one centered column grid stackable">
    <div className="twelve wide column">
      <ContentDefault />
    </div>
  </div>
);

export default MainLayout;
