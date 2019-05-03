import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryNavBar = () => (
    <nav className="app-nav__primary">
      <div className="app-nav__brand-logo">
        <h3>Logo</h3>
      </div>
      <ul>
        <li>
          <Link to="/" className="jumbotron-nav__link">Home</Link>
        </li>
        <li>
          <Link to="/" className="jumbotron-nav__link">Culture</Link>
        </li>
        <li>
          <Link to="/" className="jumbotron-nav__link">Tech</Link>
        </li>
        <li>
          <Link to="/" className="jumbotron-nav__link">Fiction</Link>
        </li>
        <li>
          <Link to="/" className="jumbotron-nav__link">Politics</Link>
        </li>
        <li>
          <Link to="/" className="jumbotron-nav__link">Health</Link>
        </li>
        <li>
          <Link to="/" className="jumbotron-nav__link">Self</Link>
        </li>
        <li>
          <Link to="/" className="jumbotron-nav__link">Romance</Link>
        </li>
      </ul>
    </nav>
);

export default PrimaryNavBar;
