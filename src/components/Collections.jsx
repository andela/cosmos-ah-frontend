import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Collection from './Collection';

const CollectionsContainer = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
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
