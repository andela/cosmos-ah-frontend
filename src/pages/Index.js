import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('token')) {
      localStorage.signinUser = urlParams.get('token');
    }
  });

  return (
    <div>
      <h3>Welcome to Authors Haven</h3>
      <p>A place for creative minds</p>
    </div>
  );
};

export default Home;
