/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h3>Welcome to Authors Haven</h3>
    <p>A place for creative minds</p>
    <Link to='signin'>SignIn</Link>
  </div>
);

export default Home;
