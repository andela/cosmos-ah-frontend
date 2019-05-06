import React from 'react';
import {
  BrowserRouter, Route, Link, Switch
} from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../../assets/images/logo.png';

const Img = styled.img`
  position: relative;
  height: 40px;
  width: 120px !important;
`;

const Logo = () => (
  <BrowserRouter>
    <Link className="item" to="/">
      <Img src={logo} />
    </Link>
  </BrowserRouter>
);

export default Logo;
