import React from 'react';

const Jumbotron = () => (
  <div className="showcase-flex">
    <div className="jumbotron-text-intro">
      <h3 className="jumbotron-text-heading">Welcome to Author's Haven</h3>
      <p>Creating a community of like minded authors
        who foster inspiration and innovation by
        leveraging the modern web.
          </p>
    </div>
    <div className="article-trending">
      <img src="" alt="A man smiling" />
      <h3>Meet the people coding our world</h3>
      <p>Creating a community of like minded authors who foster inspiration and innovation...</p>
      <div className="article-trending__author">
        <p>Emily J. Smith in <span>Politics</span></p>
        <p>Mar 26<span>7 Min read</span></p>
      </div>
    </div>
  </div>
);

export default Jumbotron;
