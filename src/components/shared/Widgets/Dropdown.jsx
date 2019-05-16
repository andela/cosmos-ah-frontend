import React, { Fragment } from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const DropdownSelect = ({ dropDownItems, placeholder }) => (
    <Fragment>
      <Dropdown
        placeholder={placeholder}
        options={dropDownItems}
        button
        compact
        lazyLoad
      />
    </Fragment>
);

DropdownSelect.propTypes = {
  dropDownItems: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string
  })),
  placeholder: PropTypes.string.isRequired
};

export default DropdownSelect;
