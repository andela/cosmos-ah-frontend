import React from 'react';
import { Link } from 'react-router-dom';
import HomePageBody from '../components/HomePageBody';
import '../assets/css/fonts.css';

const defaultImage = 'https://pbs.twimg.com/profile_images/977609983079735297/h8yBKt0r_400x400.jpg';

const articles = [
  {
    id: 1,
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    title: 'my-article',
    author: 'Arya',
    image: defaultImage
  },

  {
    id: 2,
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    title: 'my-article',
    author: 'Arya',
    image: defaultImage
  }
];

const Home = () => (
  <div>
    <h3>Welcome to Authors Haven</h3>
    <p>A place for creative minds</p>
    <HomePageBody articles={articles} articleImg={defaultImage} />
  </div>
);

export default Home;
