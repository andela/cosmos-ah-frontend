import React from 'react';
import PrimaryNavBar from '../components/PrimaryNavBar.jsx';
import NavBar from '../components/NavBar.jsx';
import SecondaryNavBar from '../components/SecondaryNavBar.jsx';
import AppJumbotron from '../components/ShowCase.jsx';

const HomePage = () => (
    <div className="jumbotron">
      <header>
        <NavBar>
          <SecondaryNavBar />
          <PrimaryNavBar />
        </NavBar>
      </header>
      <AppJumbotron />
    </div>
);

export default HomePage;
