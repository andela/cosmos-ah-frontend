import React, { Fragment } from 'react';
import HomePageMainBody from '../components/HomePageMainBody';
import { ConnectedHero } from '../components/Hero';
import '../assets/css/fonts.css';

const HomePage = () => (
    <Fragment>
      <ConnectedHero />
      <HomePageMainBody />
    </Fragment>
);

export default HomePage;
