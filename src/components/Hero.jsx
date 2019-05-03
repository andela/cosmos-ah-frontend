import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import Nav from './Nav.jsx';
import ShowCase from './ShowCase.jsx';

const HeroContainer = styled.div`
  background-color: #3A8FDD;
  color: #FFF;
`;

const Hero = () => (
  <HeroContainer>
  <Container as="section">
      <Nav />
      <ShowCase article={{}} />
  </Container>
  </HeroContainer>
);

export default Hero;
