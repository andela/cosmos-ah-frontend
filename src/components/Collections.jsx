import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Collection from './Collection';

const CollectionsContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    
  }
`;

const Collections = ({ collections }) => (
  <CollectionsContainer>
    {
      Object.keys(collections).map(collectionTitle => {
        const collection = collections[collectionTitle];
        return (
          <Collection collection={collection} key={collection.id} />
        );
      })
    }
  </CollectionsContainer>
);

Collections.propTypes = {
  collections: PropTypes.object.isRequired
};

export default Collections;
