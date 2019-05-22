import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CollectionImageContainer = styled.div`
  width: 180px;
  height: 250px;
  background-color: lightgrey;
  border-radius: 10px;
  cursor: pointer;
  background: url(${props => props.imageUrl})
`;

const Collection = ({ collection }) => (
    <div>
      <h3>{collection.title}</h3>
      <CollectionImageContainer imageUrl={collection.image}>
      </CollectionImageContainer>
      <span style={{
        display: 'block',
        marginTop: '10px'
      }}>{collection.storyCount} stories</span>
    </div>
);

Collection.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    storyCount: PropTypes.number
  })
};

export default Collection;
