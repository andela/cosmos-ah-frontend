import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const AltLogo = () => (
  <div>
    <Link to='/'><img src={logo} width={200} /></Link>
  </div>
);

export default AltLogo;
