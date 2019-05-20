import React, { Fragment } from 'react';
import styled from 'styled-components';

import Content from '../../Content';

const MainLayout = () => (
  <div className="ui one centered column grid stackable">
    <div className="twelve wide column">
      <Content />
    </div>
  </div>
);

export default MainLayout;
