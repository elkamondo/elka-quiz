import React from 'react';
import PropTypes from 'prop-types';

function CategoryName({ name }) {
  return <h3 className="title is-3">{name}</h3>;
}

CategoryName.propTypes = {
  name: PropTypes.string.isRequired
};

export default CategoryName;
