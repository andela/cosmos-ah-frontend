import React from 'react';
import { Link } from 'react-router-dom';

const AltLogo = ({ logo }) => (
  <div>
    <Link to='/'><img src={logo} width={150} /></Link>
  </div>
);

export default AltLogo;
