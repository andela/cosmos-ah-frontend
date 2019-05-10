import React from 'react';
import { Link } from 'react-router-dom';

const AltLogo = ({ logo, width }) => (
  <div>
    <Link to='/'><img src={logo} width={200} /></Link>
  </div>
);

export default AltLogo;
