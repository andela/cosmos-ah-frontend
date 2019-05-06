import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h3>Welcome to Authors Haven</h3>
    <p>A place for creative minds</p>
    <Link to='/login'>Login</Link>
  </div>
);

export default Home;
