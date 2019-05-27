import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CollectionContainer = styled.div`
  flex: 1 1 calc(100% / 3 - 20px);
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    flex: 1 1 auto;
    margin-bottom: 20px;
  }
`;

const StoryCount = styled.span`
  display: block;
  margin-top: 10px;
`;

const CollectionImageContainer = styled.div`
  width: auto;
  height: 250px;
  background-color: lightgrey;
  border-radius: 5px;
  background: url(${props => props.imageUrl});
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Collection = ({ collection }) => (
    <CollectionContainer>
      <h3>{collection.title}</h3>
      <CollectionImageContainer imageUrl={collection.image}>
      </CollectionImageContainer>
      <StoryCount>{collection.storyCount} stories</StoryCount>
    </CollectionContainer>
);

Collection.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    storyCount: PropTypes.number
  })
};

export default Collection;
