import React from 'react';
import {
  Route, Link,
} from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../../assets/images/logo.png';

const Img = styled.img`
  position: relative;
  height: 40px;
  width: 120px !important;
`;

const Logo = () => (
  <Route>
    <Link className="item" to="/">
      <Img src={logo} />
    </Link>
  </Route>
);

export default Logo;
