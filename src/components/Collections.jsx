import React from 'react';
import PropTypes from 'prop-types';
import Collection from './Collection';

const Collections = ({ collections }) => (
    <div>
      {collections.map(collection => (
          <Collection collection={collection} />
      ))}
    </div>
);

Collections.propTypes = {
  collections: PropTypes.array.isRequired
};

export default Collections;
